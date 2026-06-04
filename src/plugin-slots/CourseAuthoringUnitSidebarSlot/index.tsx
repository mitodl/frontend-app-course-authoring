import { PluginSlot } from '@openedx/frontend-plugin-framework/dist';
import { UnitSidebar } from '@src/course-unit/unit-sidebar/UnitSidebar';

export const CourseAuthoringUnitSidebarSlot = (
  {
    blockId,
    courseId,
    unitTitle,
    xBlocks,
    readOnly,
    isUnitVerticalType,
    isSplitTestType,
  }: CourseAuthoringUnitSidebarSlotProps,
) => (
  <div className="pt-1 align-self-stretch" // pt-1 fixes the vertical alignment of the sidebar;
    // align-self-stretch makes this wrapper span the full height of the unit page so the sticky sidebar can follow scrolling
  >
    <PluginSlot
      id="org.openedx.frontend.authoring.course_unit_sidebar.v2"
      pluginProps={{
        blockId,
        courseId,
        unitTitle,
        xBlocks,
        readOnly,
        isUnitVerticalType,
        isSplitTestType,
      }}
    >
      <UnitSidebar
        legacySidebarProps={{
          unitTitle,
          xBlocks,
          readOnly,
          isUnitVerticalType,
          isSplitTestType,
        }}
      />
    </PluginSlot>
  </div>
);

type XBlock = {
  id: string;
  name: string;
  blockType: string;
};

interface CourseAuthoringUnitSidebarSlotProps {
  blockId: string;
  courseId: string;
  unitTitle: string;
  xBlocks: XBlock[];
  readOnly: boolean;
  isUnitVerticalType: boolean;
  isSplitTestType: boolean;
}
