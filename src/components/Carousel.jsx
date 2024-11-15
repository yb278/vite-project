function Carousel (){
    
    return (
        
        <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="carousel"  >
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://www.topgear.com/sites/default/files/2024/08/TopGear%20-%20LT%20-%20M2-2_1.jpg" class="d-block w-100 carousel-img" alt="M2"/>
                </div>
                <div class="carousel-item">
                    <img src="https://cdn.sanity.io/images/c8ihu5xk/production/ae85bba66a451af26e35829135519662bc876b1b-6016x4016.jpg?fm=webp&w=600&q=80"  class="d-block w-100 carousel-img" alt="M3"/>
                </div>
                <div class="carousel-item">
                    <img src="https://prestigeandperformancecar.com/wp-content/uploads/M3-Touring-26-900x563.jpg.webp"  class="d-block w-100 carousel-img" alt="M4"/>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;