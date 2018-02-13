import React, { Component } from 'react';

import { createStars, updateStars, updateStar } from './utils';

export default class Astrum extends Component {

  constructor() {
    super();
    this.tick = this.tick.bind(this);
  }
  
  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.createStars();
    this.raf = requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  }

  componentWillReceiveProps(nextProps) {
    updateStars(
      this.stars,
      nextProps.width,
      nextProps.height,
      nextProps.speed,
      nextProps.down,
    );
  }

  tick() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.props.color;
    this.stars.forEach((star) => {
      this.ctx.fillRect(star.x, star.y, star.w, star.w);
      updateStar(star, this.canvas.height);
    });
    this.raf = requestAnimationFrame(this.tick);
  }

  createStars() {
    this.stars = createStars(
      this.props.stars,
      this.canvas.width,
      this.canvas.height,
      this.props.speed,
      this.props.down,
    );
  }

  render() {
    return (
      <canvas
        width={this.props.width}
        height={this.props.height}
        ref={(canvas) => { this.canvas = canvas; }}
      />
    );
  }
}

Astrum.defaultProps = {
  stars: 100,
  speed: 0.3,
  color: '#ffffff',
  width: 1000,
  height: 200,
};