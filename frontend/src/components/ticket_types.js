import React from 'react';
import Table from 'react-bootstrap/Table';

class TicketTypes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            events:[]
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/v1/ticket_types")
            .then(res =>res.json())
            .then(
                (result) => {
                    //console.log(result);
                    this.setState({
                        isLoaded: true,
                        tts: result
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
        const { error, isLoaded, tts } = this.state;

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
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tts.map(tt => 
                    <tr key={tt.id}>
                        <td>{tt.name}</td>
                        <td>{tt.price}</td>
                    </tr>)}
                </tbody>
            </Table>
            );
        }
    }
}

export default TicketTypes;