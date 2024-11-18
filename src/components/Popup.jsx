function Popup(){
    const popover = new bootstrap.Popover('.popover-dismiss', {
        trigger: 'focus'
      })

    return(
        <>
            <div>
                <a tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="Dismissible popover" data-bs-content="this is a test">Dismissible popover</a>
            </div> 
        </>
    )
}

export default Popup;