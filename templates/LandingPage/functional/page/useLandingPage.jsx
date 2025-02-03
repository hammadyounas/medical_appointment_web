import { useState } from "react";

const useLandingPage = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    return {selectedIndex, setSelectedIndex}
}

export default useLandingPage