
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Stack,
    useColorMode,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react';
import Banner from './Banner';
import Styles from './navbar.module.css'

const Links = ['Home', 'Proyects', 'Contact'];
const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700')
        }}
        href={'#'}
    >
        {children}
    </Link>
)
export const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode,toggleColorMode }= useColorMode();
    return (
        <>
            <div className={Styles.mobileNav}>
                <Box
                    bg={useColorModeValue('gray.100', 'gray.900')}
                    px={4}
                >
                    <Flex
                        h={16}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <HStack
                            spacing={8}
                            alignItems={'center'}
                        >
                            <HStack
                                as={'nav'}
                                spacing={4}
                                display={{ base: 'none', md: 'flex' }}
                            >
                                {Links.map((link) => (
                                    <NavLink key={link}>
                                        {link}
                                    </NavLink>
                                ))}
                            </HStack>
                        </HStack>
                        <Flex alignItems={'center'}>
                            <Menu>
                                <Button
                                    onClick={toggleColorMode}
                                    m={2}
                                    size={'md'}
                                    >
                                    {colorMode=='light'? <MoonIcon/>:<SunIcon/>}
                                    </Button>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}
                                >
                                    
                                    <Avatar
                                        size={'md'}
                                        src={'https://c8.alamy.com/compes/p9mywr/hombre-de-perfil-avatar-p9mywr.jpg'}
                                    />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem> Link 1</MenuItem>
                                    <MenuItem> Link 2</MenuItem>
                                    <MenuDivider />
                                    <MenuItem> Link 3</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </Flex>
                    {isOpen ? (
                        <Box
                            pb={4}
                            display={{ md: 'none' }}
                        >
                            <Stack
                                as={'nav'}
                                spacing={4}
                            >
                                {Links.map((link) => (
                                    <NavLink key={link}>{link}</NavLink>
                                ))}
                            </Stack>

                        </Box>
                    ) : null}
                </Box>

            </div>
            <Banner />
        </>
    );
};
