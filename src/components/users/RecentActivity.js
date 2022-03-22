import ActivityPreview from "./ActivityPreview";
import {format} from "date-fns";

const RecentActivity = (props) => {
  const { activity } = props;

  const styleClasses = "bg-pink-300 p-7 m-7 rounded-md flex flex-1 flex-col"
  const timeStyle = "self-end"
  return (
    <li className={styleClasses}>
      <ActivityPreview activity={activity} />
      <p className={timeStyle}>on {format(activity.timestamp, "MM/dd/yyyy")} at {format(activity.timestamp, "hh:mm:ss a")}</p>
    </li>
  );
};

export default RecentActivity;
