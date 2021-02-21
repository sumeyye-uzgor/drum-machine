import React from "react";
import ReactDOM from "react-dom";

const campfireStory = "yourURLorIMPORTtoYOURmp3";
const bootingUp = "yourURLorIMPORTtoYOURmp3";


class App extends React.Component {
    state = {
        selectedTrack: null,
        player: "stopped",
        currentTime: null,
        duration: null
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedTrack !== prevState.selectedTrack) {
            let track;
            if (track) {
                this.player.src = track;
                this.player.play();
                this.setState({ player: "playing", duration: this.player.duration });
            }
        }
    }

    render() {
        const list = [
            { id: 1, title: "Campfire Story" },
            { id: 2, title: "Booting Up" }
        ].map(item => {
            return (
                <li
                    key={item.id}
                    onClick={() => this.setState({ selectedTrack: item.title })}
                >
                    {item.title}
                </li>
            );
        });


        return (
            <>

                <audio ref={ref => (this.player = ref)} />
            </>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
