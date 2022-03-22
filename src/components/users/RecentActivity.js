import ActivityPreview from "./ActivityPreview";
import {format} from "date-fns";

const RecentActivity = (props) => {
  const { activity } = props;
  return (
    <li>
      <ActivityPreview activity={activity} />
      <p>on {format(activity.timestamp, "MM/dd/yyyy")} at {format(activity.timestamp, "hh:mm:ss a")}</p>
    </li>
  );
};

export default RecentActivity;
