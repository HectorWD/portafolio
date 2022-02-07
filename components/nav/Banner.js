import React from 'react';
import {
    Box, Button, color, Flex, Heading, Stack
} from "@chakra-ui/react";
export default function Banner(){
  return(
    <Box
    h={'50vh'}
    bgImage={'/img/banner.png'}
    bgRepeat='no-repeat'
    bgSize={'cover'}
>
    <Flex
        direction={'column'}
        alignItems='center'
        justify={'center'}
        h='100%'
        bg={'rgb(252,186,3/.5)'}
        p={['0 10%',null, '0 20%']}
    >
        <Heading
            variant={'banner'}
        >
            Hector Wong
        </Heading>
        <Stack
            direction={{base:'column', md:'row'}}
            spacing='40px'
            mt={'30px'}
            w={['100%', null, 'auto']}

        >
            <Button
                variant={'outline'}   
                size='lg' 
            >
                Descargar CV
            </Button>
            <Button
                variant={'outline'}
                size='lg'
            >
                Mas info..
            </Button>
        </Stack>
    </Flex>

</Box>
  )
};
