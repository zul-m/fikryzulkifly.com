import React from "react";

function StudioNavbar(props: any) {
  return (
    <div className="pt-16 mt-2">
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
