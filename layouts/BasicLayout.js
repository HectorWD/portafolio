import { Box } from "@chakra-ui/react";
import Banner from "../components/nav/Banner";
import { NavBar } from "../components/nav/NavBar";

export default function BasicLayout({children}) {

    return (
        <div>
            <NavBar/>
            <Box
        p={4}
        >{children} </Box>
        </div>
    );
};
