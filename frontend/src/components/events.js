import React from 'react';
import Table from 'react-bootstrap/Table';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            events:[]
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/v1/events")
            .then(res =>res.json())
            .then(
                (result) => {
                    //console.log(result);
                    this.setState({
                        isLoaded: true,
                        events: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                });
    }

    render() {
        const { error, isLoaded, events } = this.state;

        if (error) {
            return <div>Error {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Start Date</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => 
                    <tr key={event.id}>
                        <td>{event.name}</td>
                        <td>{event.description}</td>
                        <td>{event.start_date}</td>
                    </tr>)}
                </tbody>
            </Table>
            );
        }
    }
}

export default Events;