import Image from "next/image";
import React from "react";

const Logo = () => {
	return (
		<div>
			<Image className="rounded-[10px] cursor-pointer" src={"/images/pp.png"} alt='Logo Image' width={"60"} height={"60"} />
		</div>
	);
};

export default Logo;
