
import { differenceInDays, isPast } from "date-fns";

export const calculateDaysLeft = (dateString) => {
    const deadlineDate = new Date(dateString);
    const today = new Date();

    if (isPast(deadlineDate) && differenceInDays(deadlineDate, today) <= 0) {
      return "Deadline passed";
    }

    const diffDays = differenceInDays(deadlineDate, today);
    return `${diffDays} days left`;
};
