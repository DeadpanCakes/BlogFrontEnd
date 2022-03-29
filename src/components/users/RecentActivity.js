import ActivityPreview from "./ActivityPreview";
import { format } from "date-fns";
import { HashLink } from "react-router-hash-link";

import identifyDoc from "../../utils/identifyDoc";

const RecentActivity = (props) => {
  const { activity } = props;

  const docType = identifyDoc(activity);

  const styleClasses = "bg-pink-300 p-7 m-7 rounded-md flex flex-1 flex-col";
  const timeStyle = "self-end text-sm";
  return (
    <li>
      <HashLink
        to={
          docType === "comment"
            ? `${activity.url}#${activity._id}`
            : activity.url
        }
        className={styleClasses}
      >
        <ActivityPreview activity={activity} />
        <p className={timeStyle}>
          on {format(activity.timestamp, "MM/dd/yyyy")} at{" "}
          {format(activity.timestamp, "hh:mm:ss a")}
        </p>
      </HashLink>
    </li>
  );
};

export default RecentActivity;
