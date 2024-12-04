function Checkbox(){
    return (
        <>
            <h5 class = "center_header">Which is the best out of these M cars?</h5>
                <ul class="list-group center_header" >
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" />
                        <label class="form-check-label stretched-link" for="firstRadio">G87 M2</label>
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio"/>
                        <label class="form-check-label stretched-link" for="secondRadio">E92 M3</label>
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio"/>
                        <label class="form-check-label stretched-link" for="thirdRadio">G81 M4</label>
                    </li>
                </ul>                
        </>
    );
}

export default Checkbox;