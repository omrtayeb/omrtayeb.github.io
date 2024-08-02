import { useState } from "react";

export default function BottomNav({ onSetScreenName, selectedScreenName }) {
  const handleClick = (e) => {
    e.preventDefault();
    // Use e.currentTarget.dataset.screen to get the correct screen name
    const newScreenName = e.currentTarget.dataset.screen;
    console.log(newScreenName);
    onSetScreenName(newScreenName); // Update parent component state
  };

  return (
    <>
      <nav className="btm-nav__container">
        <NavItem
          itemName={"home"}
          className={"home"}
          handleClick={handleClick}
          selectedScreenName={selectedScreenName} // Pass selectedScreenName prop
          screenName="home" // Use a unique identifier for each nav item
        />
        <NavItem
          itemName={"blogposts"}
          className={"blogposts"}
          handleClick={handleClick}
          selectedScreenName={selectedScreenName} // Pass selectedScreenName prop
          screenName="blogposts" // Use a unique identifier for each nav item
        />
        <NavItem
          itemName="case-studies"
          className={"casestudies"}
          href="#contacts"
          handleClick={handleClick}
          selectedScreenName={selectedScreenName} // Pass selectedScreenName prop
          screenName="casestudies" // Use a unique identifier for each nav item
        />
      </nav>
    </>
  );
}

function NavItem({
  itemName,
  href = "#something",
  handleClick,
  className,
  selectedScreenName,
  screenName,
}) {
  const isSelected = screenName === selectedScreenName;
  return (
    <p>
      <a
        href={href}
        className={`${className} ${isSelected ? "highlight" : ""}`}
        onClick={handleClick}
        data-screen={screenName} // Use data attribute to store screen name
      >
        <span className="hashTag">#</span>
        {itemName}
      </a>
    </p>
  );
}



// import { useState } from "react";

// export default function BottomNav({ onSetScreenName, selectedScreenName }) {
//   // Removed local state `screenName` as it's not necessary
//   // const [screenName, setScreenName] = useState(selectedScreenName);

//   const handleClick = (e) => {
//     e.preventDefault();
//     const newScreenName = e.currentTarget.className; // Use e.currentTarget to get the correct className
//     console.log(newScreenName);
//     onSetScreenName(newScreenName); // Update parent component state
//   };

//   return (
//     <>
//       <nav className="btm-nav__container">
//         <NavItem
//           itemName={"home"}
//           className={"home"}
//           handleClick={handleClick}
//           selectedScreenName={selectedScreenName} // Pass selectedScreenName prop
//         />
//         <NavItem
//           itemName={"blogposts"}
//           className={"blogposts"}
//           handleClick={handleClick}
//           selectedScreenName={selectedScreenName} // Pass selectedScreenName prop
//         />
//         <NavItem
//           itemName="case studies"
//           className={"casestudies"}
//           href="#contacts"
//           handleClick={handleClick}
//           selectedScreenName={selectedScreenName} // Pass selectedScreenName prop
//         />
//       </nav>
//     </>
//   );
// }

// function NavItem({
//   itemName,
//   href = "#something",
//   handleClick,
//   className,
//   selectedScreenName,
// }) {
//   const isSelected = selectedScreenName === className;
//   return (
//     <p className={href}>
//       <a
//         href="#contacts"
//         className={`${className} ${isSelected ? "highlight" : ""}`}
//         onClick={handleClick}
//       >
//         <span className="hashTag">#</span>
//         {itemName}
//       </a>
//     </p>
//   );
// }
