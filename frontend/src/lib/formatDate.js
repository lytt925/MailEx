import { format, formatRelative, differenceInDays, getYear, isValid } from 'date-fns';
import { zhTW } from 'date-fns/locale';

const formatMailDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const currentYear = getYear(now);
  const dateYear = getYear(date);
  const daysDifference = differenceInDays(now, date);

  let formattedDate;
  try {

    if (daysDifference <= 7) {
      formattedDate = formatRelative(date, now, { locale: zhTW });
    } else {
      if (currentYear === dateYear) {
        formattedDate = format(date, 'MM月dd日 aah:mm', { locale: zhTW });
      } else {
        formattedDate = format(date, 'yyyy年MM月dd日 aah:mm', { locale: zhTW });
      }
    }
    return formattedDate;
  } catch (error) {
    return dateString;
  }
}

export { formatMailDate };
