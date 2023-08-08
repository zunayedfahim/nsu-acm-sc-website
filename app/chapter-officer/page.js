import ChapterOfficersTab from "../components/ChapterOfficersTab";
import Coordinator from "./sections/Coordinator";
import ExecutiveBody from "./sections/ExecutiveBody";
import Incharge from "./sections/Incharge";
import Moderator from "./sections/Moderator";
import SubExecutive from "./sections/SubExecutive";

export default function ChapterOfficer() {
  return (
    <div className="">
      <Moderator />
      <Coordinator />
      <ExecutiveBody />
      <SubExecutive />
      <Incharge />
    </div>
  );
}
