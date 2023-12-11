import React from 'react';
import {
    ScrollMenu, VisibilityContext, getItemsPos,
    slidingWindow
} from 'react-horizontal-scrolling-menu';
import styles from './UserCards.module.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import UserCard from './UserCard';
import useDrag from './useDrag';

// const getItems = () =>
//     Array(20)
//         .fill(0)
//         .map((_, ind) => ({ id: `element-${ind}` }));

function UserCards({ users }) {
    const [items, setItems] = React.useState(users);
    const { dragStart, dragStop, dragMove, dragging } = useDrag();
    const [selected, setSelected] = React.useState("");

    const handleDrag = ({ scrollContainer }) => (ev) =>
        dragMove(ev, (posDiff) => {
            if (scrollContainer.current) {
                scrollContainer.current.scrollLeft += posDiff;
            }
        });

    const handleItemClick = (itemId) => ({ getItemById, scrollToItem }) => {
        if (dragging) {
            return false;
        }
        setSelected(selected !== itemId ? itemId : "");
        // NOTE: for center items
        scrollToItem(getItemById(itemId), "smooth", "center", "nearest");
    };

    return (
        <ScrollMenu
            wrapperClassName={styles.scrollingMenu} separatorClassName={styles.separator}
            LeftArrow={LeftArrow} RightArrow={RightArrow}
            onMouseDown={() => dragStart}
            onMouseUp={({
                getItemById,
                scrollToItem,
                visibleItems
            }) => () => {
                // NOTE: for center items
                dragStop();
                const { center } = getItemsPos(visibleItems);
                scrollToItem(getItemById(center), "smooth", "center");
            }}
            options={{ throttle: 0 }} // NOTE: for center items
            onMouseMove={handleDrag}
        >
            {items.map((user) => (
                <UserCard
                    userProfile={user}
                    key={user.id}
                    onClick={handleItemClick(user.id)}
                    selected={user.id === selected}
                />
            ))}
        </ScrollMenu>
    );
}

function Arrow({ children, disabled, onClick }) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                right: "1%",
                opacity: disabled ? "0" : "1",
            }}
        >
            {children}
        </button>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev, items,
        visibleItems,
        getItemById,
        scrollToItem,
        visibleElements,
        initComplete } = React.useContext(VisibilityContext);
    const [disabled, setDisabled] = React.useState(
        !initComplete || (initComplete && isFirstItemVisible)
    );

    React.useEffect(() => {
        // NOTE: detect if whole component visible
        if (visibleElements.length) {
            setDisabled(isFirstItemVisible);
        }
    }, [isFirstItemVisible, visibleElements]);

    // NOTE: for center items
    const prevGroupItems = slidingWindow(
        items.toItemsKeys(),
        visibleItems
    ).prev();
    const { center } = getItemsPos(prevGroupItems);
    const scrollPrevCentered = () =>
        scrollToItem(getItemById(center), "smooth", "center");

    return (
        <Arrow onClick={() => scrollPrevCentered()}>
            <FaChevronLeft className={isFirstItemVisible ? "text-gray-300" : "text-black"} />
        </Arrow>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext, getItemById,
        items,
        scrollToItem,
        visibleItems,
        visibleElements } = React.useContext(VisibilityContext);

    const [disabled, setDisabled] = React.useState(
        !visibleElements.length && isLastItemVisible
    );
    React.useEffect(() => {
        if (visibleElements.length) {
            setDisabled(isLastItemVisible);
        }
    }, [isLastItemVisible, visibleElements]);

    // NOTE: for center items
    const nextGroupItems = slidingWindow(
        items.toItemsKeys(),
        visibleItems
    ).next();
    const { center } = getItemsPos(nextGroupItems);
    const scrollNextCentered = () =>
        scrollToItem(getItemById(center), "smooth", "center");

    return (
        <Arrow onClick={() => scrollNextCentered()}>
            <FaChevronRight className={isLastItemVisible ? "text-gray-300" : "text-black"} />
        </Arrow>
    );
}

export default UserCards;