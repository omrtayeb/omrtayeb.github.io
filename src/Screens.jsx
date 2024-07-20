import Blogposts from "./Blogposts";
import Casestudies from "./Casestudies";
import HomeScreen from "./HomeScreen";




// export default function Screens({ screenName }) {

//   const screenStyle = {
//     transition: 'opacity 0.5s ease-in-out',
//     opacity: 0,
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//   };

//   const activeScreenStyle = {
//     ...screenStyle,
//     opacity: 1,
//   };
//   switch (screenName) {
//     case "casestudies":
//       return (
//         <div
//           className={`screen ${screenName === "casestudies" ? "active" : ""}`} 
//           style={screenName === 'casestudies' ? activeScreenStyle : screenStyle}>
//           <Casestudies />
//         </div>
//       );
//     case "blogposts":
//       return (
//         <div className={`screen ${screenName === "blogposts" ? "active" : ""}`}
//         style={screenName === 'blogposts' ? activeScreenStyle : screenStyle}>
//           <Blogposts />
//         </div>
//       );
//     default:
//       return (
//         <div className={`screen ${screenName === "home" ? "active" : ""}`}
//         style={screenName === 'home' ? activeScreenStyle : screenStyle}>
//           <HomeScreen />
//         </div>
//       );
//   }
// }

export default function Screens({ screenName }) {
  const screenStyle = {
    transition: 'opacity 0.5s ease-in-out, z-index 0s ease-in-out',
    opacity: 0,
    position: 'absolute',
    width: '100vw',
    height: '100%',
    zIndex: 0,
    overflowY: 'auto', // Allow scrolling if content is larger than the viewport
  };

  const activeScreenStyle = {
    ...screenStyle,
    opacity: 1,
    zIndex: 1,
  };

  return (
    <div className="screen-container" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <div
        className={`screen ${screenName === "home" ? "active" : ""}`}
        style={screenName === 'home' ? activeScreenStyle : screenStyle}
      >
        <HomeScreen />
      </div>
      <div
        className={`screen ${screenName === "blogposts" ? "active" : ""}`}
        style={screenName === 'blogposts' ? activeScreenStyle : screenStyle}
      >
        <Blogposts />
      </div>
      <div
        className={`screen ${screenName === "casestudies" ? "active" : ""}`}
        style={screenName === 'casestudies' ? activeScreenStyle : screenStyle}
      >
        <Casestudies />
      </div>
    </div>
  );
}
