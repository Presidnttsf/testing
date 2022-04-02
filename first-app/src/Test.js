import Button from 'react-bootstrap/Button';
function TestComponent(prop) {

    return (
        <>
            <div>
                <span> {prop.name + ' : '}</span>
                <button> Button </button>

            </div>
            <div>
                <button className="addbtn"> AddCounter 2</button>
                <Button variant="danger">Primary</Button>{' '}



            </div>


        </>


    );
};

export default TestComponent;