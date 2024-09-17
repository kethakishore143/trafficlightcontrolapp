# React Traffic Light Simulation

This project simulates a traffic light system using React.js. The traffic light consists of three lamps: red, orange, and green, which change their state in a loop. Additionally, there's a human pedestrian signal displayed using SVG that changes color based on the traffic light state.

## Features

- **Traffic light cycle**: The red, orange, and green lamps change their state based on configurable timers.
- **Pedestrian signal**: An SVG-based pedestrian indicator that changes color corresponding to the traffic light.
- **Dynamic countdown**: A timer countdown displays the remaining time for each light.

## Technologies Used

- **React.js**: For building the interactive user interface.
- **CSS**: For styling the traffic light, poles, and pedestrian signal.
- **JavaScript**: For handling the traffic light logic using React hooks (`useState`, `useEffect`).
  
## Project Structure

/src ├── components │ └── TrafficLight.js # Main traffic light component ├── TrafficLight.css # Styles for the traffic light and pedestrian signal └── App.js # Root component of the React application



## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/kethakishore143/trafficlightcontrolapp.git
    ```

2. **Navigate into the project directory**:

    ```bash
    cd react-traffic-light
    ```

3. **Install dependencies**:

    Make sure you have [Node.js](https://nodejs.org/en/) installed. Then run:

    ```bash
    npm install
    ```

4. **Start the development server**:

    ```bash
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## How It Works

The traffic light system operates in three stages:

1. **Green light**: The green light is on for a set duration (default is 10 seconds), during which the pedestrian signal is also green.
2. **Orange light**: The orange light is on for a set duration (default is 3 seconds), and the pedestrian signal turns red.
3. **Red light**: The red light is on for a set duration (default is 7 seconds), and the pedestrian signal stays red.

The cycle repeats continuously, and the countdown timer is displayed during each stage.

## Customization

You can modify the light durations by updating the timer values directly in the `TrafficLight.js` file:

```javascript
const redTimer = 7;   // Duration for red light
const oraTimer = 3;   // Duration for orange light
const greTimer = 10;  // Duration for green light
