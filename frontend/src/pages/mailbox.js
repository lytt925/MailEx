// Import the unwrapped Inbox component
import { Inbox } from '@/components/Inbox/index';
import withAuth from '@/lib/withAuth';

// Wrap the component
const AuthenticatedInbox = withAuth(Inbox);

function MailboxPage() {
  return (
    <AuthenticatedInbox />
  );
}

export default MailboxPage;
