import React from "react";

import {AppBar, Container, styled, Box, Button, Stack, IconButton} from '@mui/material';
import {Search as SearchIcon, Menu as MenuIcon} from "@mui/icons-material";

import LoginRegisterModal from "@/components/LoginRegisterModal";

const Menu = styled(Box)({
    borderBottom: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2
})

const MenuItem = styled(Button)({
    fontWeight: 900,
    fontSize: '12px',
    marginRight: '2px'
})

const Logo = styled('div')({
    fontWeight: 900,
    color: 'black',
    fontSize: "34px",
    cursor: 'pointer'
})

const LogoDesc = styled(Box)({
    fontWeight: 600,
    color: 'black',
    fontSize: "12px",
})

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Container>
                <AppBar position="static" color="transparent" elevation={0}>
                    <Menu>
                        <Stack direction={'row'} flex={1}>
                            <Logo>Bekhzod</Logo>
                            <Stack direction={'column'} sx={{marginLeft: 1, marginTop: 1}}>
                                <LogoDesc>bekzodcoder</LogoDesc>
                                <LogoDesc>coder</LogoDesc>
                            </Stack>
                        </Stack>

                        <Stack direction={'row'} m={2}>
                            <MenuItem sx={{fontSize:'15px'}} color={"inherit"}>
                                Books
                            </MenuItem>
                            <MenuItem sx={{fontSize:'15px'}} color={"inherit"}>
                                VIDEOS
                            </MenuItem>
                            <MenuItem sx={{fontSize:'15px'}} color={"inherit"}>
                                YEAR IN REVIEW
                            </MenuItem>
                            <Button color={'inherit'} onClick={handleOpen}>
                                LOG IN
                            </Button>
                            <MenuItem
                                color={"inherit"}
                                sx={{
                                    color: '#0049fb',
                                    border: '1px solid #0049fb',
                                    fontWeight: 'bold'
                                }}
                                onClick={handleOpen}
                            >
                                SIGN UP
                            </MenuItem>
                            <MenuItem
                                color={"inherit"}
                                sx={{
                                    color: 'green',
                                    border: '1px solid green',
                                    fontWeight: 'bold'
                                }}
                            >
                                CREATE
                            </MenuItem>
                        </Stack>
                        <IconButton size={"small"} edge={"start"} color={"inherit"}>
                            <SearchIcon sx={{fontSize: 35}}/>
                        </IconButton>
                        <IconButton size={"small"} edge={"start"} color={"inherit"}>
                            <MenuIcon sx={{fontSize: 39}}/>
                        </IconButton>
                    </Menu>
                </AppBar>
                <LoginRegisterModal open={open} handleClose={handleClose} />
            </Container>
        </>

    )
}

export default Navbar;