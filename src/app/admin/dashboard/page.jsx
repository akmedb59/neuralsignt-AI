import CompletedPSec from "@/app/components/admin/dashboard/sections/completedPSec";
import MessagesSec from "@/app/components/admin/dashboard/sections/messagesSec";
import RecentProjectsSec from "@/app/components/admin/dashboard/sections/recentProjectsSec";
import StatusSection from "@/app/components/admin/dashboard/sections/statusSection";
import TeamsSection from "@/app/components/admin/dashboard/sections/teamsSection";
import React from "react";

const Page = () => {
  return (
    <div className="grid grid-cols-3 p-5 lg:p-10 gap-5">
      <div className="col-span-2 grid gap-5">
        <div>
          <StatusSection />
        </div>
        <div>
          <TeamsSection />
        </div>
        <div>
          <RecentProjectsSec />
        </div>
      </div>
      <div className="col-span-1 grid gap-5">
        <div>
          <MessagesSec />
        </div>
        <div>
          <CompletedPSec />
        </div>
      </div>
    </div>
  );
};

export default Page;
