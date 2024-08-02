import Blogposts from "./Blogposts";
import Casestudies from "./Casestudies";
import HomeScreen from "./HomeScreen";




export default function Screens({ screenName }) {
  const screenStyle = {
    // transition: 'opacity 0.5s ease-in-out, z-index 0s ease-in-out',
    // opacity: 0,
    position: 'absolute',
    width: '100%',
    // height: '100%',
    zIndex: 0,
    display:"none"
    // overflowY: 'auto', // Allow scrolling if content is larger than the viewport
  };

  const activeScreenStyle = {
    ...screenStyle,
    display:"block",
    opacity: 1,
    // height: '100%',
    zIndex: 1,
  };

  return (
    <div className="screen-container" >
      <div
        className={` ${screenName === "home" ? "screen_active" : "screen_deactive"}`}
        // style={screenName === 'home' ? activeScreenStyle : screenStyle}
      >
        <HomeScreen />
      </div>
      <div
        // className={`screen ${screenName === "blogposts" ? "screen_active" : "screen_deactive"}`}
        className={`${screenName === "blogposts" ? "screen_active" : "screen_deactive"}`}
        // style={screenName === 'blogposts' ? activeScreenStyle : screenStyle}
      >
        <Blogposts />
      </div>
      <div
        className={` ${screenName === "casestudies" ? "screen_active" : "screen_deactive"}`}
        // style={screenName === 'casestudies' ? activeScreenStyle : screenStyle}
      >
        <Casestudies />
      </div>
    </div>
  );
}
