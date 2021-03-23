import { Button, Card, CardActionArea, CardActions } from "@material-ui/core";
import React, { Component } from "react";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.deleteImage = this.deleteImage.bind(this);
  }

  deleteImage(id) {
    return fetch("/api/delete" + "?id=" + id, {
      method: "DELETE",
    }).then((response) => this.props.updateCallback());
  }

  render() {
    return (
      <Card
        align="center"
        key={this.props.id}
        style={{ marginTop: 20, marginLeft: 20 }}
      >
        <CardActionArea>
          <img src={this.props.imageUrl} style={{ height: 250, width: 300 }} />
        </CardActionArea>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            size="small"
            variant="contained"
            component="label"
            color="secondary"
            onClick={this.deleteImage.bind(this, this.props.id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  }
}
