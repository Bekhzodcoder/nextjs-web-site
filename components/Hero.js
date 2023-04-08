import React from "react";
import {Container, Fab, Grid} from "@mui/material";
import Card from './Card';

const Hero = () =>{
    return(
        <Container>
            <Grid container>
                <Grid item xs={12} mb={2} mt={2} >
                    <Card
                        direction={'row'}
                        imgWidth={556}
                        imgHeight={400}
                        mycolor={"black"}
                        linkSrc={'/'}
                        fontSize={'40px'}
                        imgSrc={'https://cdn.pixabay.com/photo/2022/12/21/08/40/rose-7669467_640.jpg'}
                        heading={'Example'}
                        title={'The Ultimate NEXTJS13 Course wth MUI5 by Cloning GatesNOTES Blog'}
                        Desc={'Complete NEXT API and CRUD with Responsive MUI5 Blog CodingStrade Coding made Simple'}
                        author={'By Billgates | Jan 09, 2023'}
                        EditButton={
                            <Fab
                                size={'small'}
                                variant={'extended'}
                                color={"success"}
                                aria-label={"edit"}
                            >Edit</Fab>
                        }
                    ></Card>
                </Grid>
                <Grid item md={3} spacing={1}>
                    <Card
                        direction={'column'}
                        imgWidth={280}
                        imgHeight={220}
                        mycolor={"black"}
                        linkSrc={'/'}
                        fontSize={'18px'}
                        imgSrc={'https://cdn.pixabay.com/photo/2022/11/29/17/40/african-elephants-7624960_640.jpg'}
                        title={'The Ultimate NEXTJS13 Course wth MUI5 by Cloning GatesNOTES Blog'}
                        Desc={'Complete NEXT API and CRUD with Responsive MUI5 Blog CodingStrade Coding made Simple'}
                        EditButton={
                            <Fab
                                size={'small'}
                                variant={'extended'}
                                color={"success"}
                                aria-label={"edit"}
                            >Edit</Fab>
                        }
                    ></Card>
                </Grid>

                <Grid item md={3} spacing={1}>
                    <Card
                        direction={'column'}
                        imgWidth={280}
                        imgHeight={220}
                        mycolor={"black"}
                        linkSrc={'/'}
                        fontSize={'18px'}
                        imgSrc={'https://cdn.pixabay.com/photo/2022/11/29/17/40/african-elephants-7624960_640.jpg'}
                        title={'The Ultimate NEXTJS13 Course wth MUI5 by Cloning GatesNOTES Blog'}
                        Desc={'Complete NEXT API and CRUD with Responsive MUI5 Blog CodingStrade Coding made Simple'}
                        EditButton={
                            <Fab
                                size={'small'}
                                variant={'extended'}
                                color={"success"}
                                aria-label={"edit"}
                            >Edit</Fab>
                        }
                    ></Card>
                </Grid>
                <Grid item md={3} spacing={1}>
                    <Card
                        direction={'column'}
                        imgWidth={280}
                        imgHeight={220}
                        mycolor={"black"}
                        linkSrc={'/'}
                        fontSize={'18px'}
                        imgSrc={'https://cdn.pixabay.com/photo/2022/11/29/17/40/african-elephants-7624960_640.jpg'}
                        title={'The Ultimate NEXTJS13 Course wth MUI5 by Cloning GatesNOTES Blog'}
                        Desc={'Complete NEXT API and CRUD with Responsive MUI5 Blog CodingStrade Coding made Simple'}
                        EditButton={
                            <Fab
                                size={'small'}
                                variant={'extended'}
                                color={"success"}
                                aria-label={"edit"}
                            >Edit</Fab>
                        }
                    ></Card>
                </Grid>
                <Grid item md={3} spacing={1}>
                    <Card
                        direction={'column'}
                        imgWidth={280}
                        imgHeight={220}
                        mycolor={"black"}
                        linkSrc={'/'}
                        fontSize={'18px'}
                        imgSrc={'https://cdn.pixabay.com/photo/2022/11/29/17/40/african-elephants-7624960_640.jpg'}
                        title={'The Ultimate NEXTJS13 Course wth MUI5 by Cloning GatesNOTES Blog'}
                        Desc={'Complete NEXT API and CRUD with Responsive MUI5 Blog CodingStrade Coding made Simple'}
                        EditButton={
                            <Fab
                                size={'small'}
                                variant={'extended'}
                                color={"success"}
                                aria-label={"edit"}
                            >Edit</Fab>
                        }
                    ></Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Hero;