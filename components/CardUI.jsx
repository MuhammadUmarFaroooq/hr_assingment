import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Avatar } from "@mui/material";

function CardUI({ title, imgSrc }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "30px",
      }}
      className="shadow-lg relative"
    >
      <CardActionArea>
        <div className="relative">
          <CardMedia
            component="img"
            height="160"
            image={imgSrc} // Use the imgSrc prop
            alt={title} // Use the title as alt text
            className="rounded-[40px]"
            style={{ padding: "20px", objectFit: "cover" }}
          />
          <Button
            variant="contained"
            style={{ textTransform: "none" }}
            sx={{
              backgroundColor: "#7B5AFF",
              borderRadius: "999px",
              padding: "6px 12px",
              fontSize: "14px",
              position: "absolute",
              top: "30px",
              right: "30px",
              "&:hover": {
                backgroundColor: "#6A49FF",
              },
            }}
          >
            Check-in
          </Button>
        </div>
        <CardContent>
          <h2 className="text-[20px] font-semibold">{title}</h2>{" "}
          {/* Use the title prop */}
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            20 Sept, 2024
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="ml-2 mb-2">
        <Avatar alt="Remy Sharp" src="./images/Avatar.png" />
        <h2 className="font-semibold text-base">Owner: Omar Akhter</h2>
      </CardActions>
    </Card>
  );
}

export default CardUI;
