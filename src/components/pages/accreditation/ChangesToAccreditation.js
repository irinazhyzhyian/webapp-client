import React from "react";
import { Box } from "@mui/system";
import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import fileImg from "../../../assets/emptyFile.png";
import AddIcon from '@mui/icons-material/Add';
import { useToggle } from "react-use";
import AddDocument from "../../modals/AddDocument/AddDocument";

const ChangesToAccreditation = ({ files }) => {
    const [isModalOpen, toggleModalOpen] = useToggle(false);
    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Button
                    sx={{ m: 3, width: '300px' }}
                    variant="contained"
                    color="secondary"
                    startIcon={<AddIcon />}
                    onClick={toggleModalOpen}
                >
                    Додати документ
                </Button>
                <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
                    {files.map((file) => (
                        <Card sx={{ width: '300px', display: "flex", alignItems: "center", flexDirection: "column", paddingTop: '20px' }}>
                            <img src={fileImg} alt="File" style={{ width: "80px" }} />
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {file.document[0].name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <a href={`${process.env.REACT_APP_URL}/${file.document[0].document}`} rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
                                    <Button size="small" variant="contained">
                                        скачати файл
                                    </Button>
                                </a>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </Box>
            <AddDocument
                open={isModalOpen}
                handleClose={toggleModalOpen}
                //refresh={refresh}
                fileType='*'
                isDescription
            />
        </>
    );
};

export default ChangesToAccreditation;