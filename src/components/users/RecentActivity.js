import ActivityPreview from "./ActivityPreview";
import {format} from "date-fns";
import {Link} from "react-router-dom";

const RecentActivity = (props) => {
  const { activity } = props;

  const styleClasses = "bg-pink-300 p-7 m-7 rounded-md flex flex-1 flex-col"
  const timeStyle = "self-end text-sm"
  return (
    <li>
      <Link to={activity.url} className={styleClasses}>
      <ActivityPreview activity={activity} />
      <p className={timeStyle}>on {format(activity.timestamp, "MM/dd/yyyy")} at {format(activity.timestamp, "hh:mm:ss a")}</p>
      </Link>
    </li>
  );
};

export default RecentActivity;
