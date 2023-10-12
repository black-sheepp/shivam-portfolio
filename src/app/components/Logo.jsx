import Image from "next/image";
import React from "react";

const Logo = () => {
	return (
		<div>
			<Image className="rounded-[10px] cursor-pointer w-10 h-10" src={"/images/pp.png"} alt='Logo Image' width={"50"} height={"50"} />
		</div>
	);
};

export default Logo;
