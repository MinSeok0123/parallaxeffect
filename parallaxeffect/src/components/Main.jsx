import { useRef } from "react";
import Image from "next/image";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Test } from "../../public/img";

function Main() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} sxpeed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url("/img/moon.png")`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url("/img/land.png")`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <Image src={Test} alt="" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.09}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>이것은 나의 사이트</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>하이!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Main;
