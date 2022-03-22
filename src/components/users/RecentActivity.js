import ActivityPreview from "./ActivityPreview";
import {format} from "date-fns";

const RecentActivity = (props) => {
  const { activity } = props;
  return (
    <li>
      <ActivityPreview activity={activity} />
      <p>at {format(activity.timestamp, "MM/dd/yyyy")}</p>
    </li>
  );
};

export default RecentActivity;
