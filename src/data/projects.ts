export interface Project {
    id: number;
    title: string;
    category: string;
    status: string;
    description: string;
    location?: string;
    area?: string;
    value?: string;
    images: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "UFlex Packaging Commercial",
        category: "Commercial",
        status: "Ongoing",
        description: "An ongoing G+4 commercial building project with a total built-up area of 13,000 sq. ft., being executed for UFlex Packaging. Our scope includes end-to-end commercial electrical works, such as HT/LT power distribution, TPN panels, busbar trunking, cable trays and raceways, power cabling, earthing, and lightning protection systems. The project also involves office interior civil and electrical fit-out works for two floors, including gypsum and glass partitions, false ceiling systems, flooring, wall finishes, modular joinery, and workstation installations, along with architectural lighting, power and socket layouts, UPS and DG integration, data and networking, fire alarm systems, CCTV, access control, and structured cabling.",
        location: "Noida",
        area: "13,000 sq. ft.",
        value: "₹3.7 Crore",
        images: [
            "/projects/uflex/uflex2.jpeg",
            "/projects/uflex/uflex1.jpeg",
            "/projects/uflex/uflex4.jpeg",
            "/projects/uflex/uflex5.jpeg",
            "/projects/uflex/uflex6.jpeg",
            "/projects/uflex/uflex7.jpeg",
            "/projects/uflex/uflex8.jpeg"
        ],
    },
    {
        id: 2,
        title: "Warehouse Development – Rewari",
        category: "Industrial / Warehouse",
        status: "Ongoing",
        description: "A 35,000 sq. ft. warehouse facility currently under development in Rewari, designed to support large-scale industrial operations. The project scope includes comprehensive electrical infrastructure and interior fit-out works, covering power distribution systems, industrial panels, busbar arrangements, cable trays and raceways, lighting installations, earthing, and lightning protection. The interior scope comprises civil and services works, including partitioning, ceiling systems, flooring finishes, wall treatments, and functional workspace development.",
        location: "Rewari",
        area: "35,000 sq. ft.",
        value: "₹5.5 Crore",
        images: [
            "/projects/warehouse-rewari/rewari1.jpg",
            "/projects/warehouse-rewari/rewari2.jpg",
            "/projects/warehouse-rewari/rewari3.jpg",
            "/projects/warehouse-rewari/rewari4.jpg",
            "/projects/warehouse-rewari/rewari5.jpg",
            "/projects/warehouse-rewari/rewari6.jpg",
            "/projects/warehouse-rewari/rewari7.jpg",
            "/projects/warehouse-rewari/rewari8.jpg",
            "/projects/warehouse-rewari/rewari9.jpg",
            "/projects/warehouse-rewari/rewari10.jpg"
        ],
    },
    {
        id: 3,
        title: "Food Flex – Noodles Packaging",
        category: "Industrial / Food Processing",
        status: "Completed",
        description: "A 30,000 sq. ft. noodles packaging warehouse plant developed for Food Flex in Dehradun, designed to support efficient production, storage, and employee operations. The project included the development of a mezzanine floor for optimized storage and the creation of a functional co-working space for employees. The scope covered complete electrical, interior civil, and services works, including industrial power distribution, high-bay and task lighting systems, cable management, earthing, and lightning protection.",
        location: "Dehradun",
        area: "30,000 sq. ft.",
        value: "₹3.5 Crore",
        images: [
            "/projects/food-flex/foodflex1.jpeg",
            "/projects/food-flex/foodflex2.jpeg",
            "/projects/food-flex/foodflex3.jpeg",
            "/projects/food-flex/foodflex4.jpeg",
            "/projects/food-flex/foodflex5.jpeg",
            "/projects/food-flex/foodflex6.jpeg",
            "/projects/food-flex/foodflex7.jpeg",
            "/projects/food-flex/foodflex8.jpeg",
            "/projects/food-flex/foodflex9.jpeg",
            "/projects/food-flex/foodflex10.jpeg"
        ],
    },
    {
        id: 4,
        title: "UFlex – Sector 4 Office",
        category: "Commercial / Renovation",
        status: "Completed",
        description: "This project involved the development of a central HR office facility for UFlex at Sector 4, encompassing a complete interior fit-out, civil renovation, and maintenance works. The scope included space reconfiguration and partitioning, false ceiling systems, flooring upgrades and wall finishes, painting and custom joinery, wooden workstations, paneling, and seating arrangements, and revamping of lighting, electrical points, and workspace layouts.",
        location: "Sector 4, Noida",
        area: "N/A",
        value: "N/A",
        images: [
            "/projects/uflex-sector-4/sectorfour1.jpg",
            "/projects/uflex-sector-4/sectorfour2.jpg",
            "/projects/uflex-sector-4/sectorfour3.jpg",
            "/projects/uflex-sector-4/sectorfour4.jpg",
            "/projects/uflex-sector-4/sectorfour5.jpg",
            "/projects/uflex-sector-4/sectorfour6.jpeg",
            "/projects/uflex-sector-4/sectorfour7.jpeg"
        ],
    },
    {
        id: 5,
        title: "Sai Naman – Farmhouse Renovation",
        category: "Residential / Renovation",
        status: "Ongoing",
        description: "A farmhouse renovation project undertaken at Sai Naman, Chattarpur, Delhi, involving complete civil works, landscaping, and external development. The project scope includes site grading and leveling, pavement road construction, garden and hardscape development, boundary works, and other associated civil and landscaping works to enhance functionality and aesthetics. The works are being executed with a focus on durability, precision, and quality.",
        location: "Chattarpur, Delhi",
        area: "N/A",
        value: "₹1.5 Crore",
        images: [
            "/projects/sai-naman/sainaman1.jpg",
            "/projects/sai-naman/sainaman2.jpg",
            "/projects/sai-naman/sainaman3.jpg",
            "/projects/sai-naman/sainaman4.jpg"
        ],
    },
    {
        id: 6,
        title: "Sultanpur – Farmhouse Renovation",
        category: "Residential / Renovation",
        status: "Ongoing",
        description: "A farmhouse renovation project at Sultanpur, Delhi, involving complete civil works, landscaping, and external development. The project scope includes site grading and leveling, construction of pavement roads, garden and hardscape development, boundary works, and other associated civil and landscaping works to enhance functionality and aesthetics.",
        location: "Sultanpur, Delhi",
        area: "N/A",
        value: "₹1 Crore",
        images: [
            "/projects/sultan-farmhouse/sultanpur1.jpg",
            "/projects/sultan-farmhouse/sultanpur2.jpg",
            "/projects/sultan-farmhouse/sultanpur3.jpg",
            "/projects/sultan-farmhouse/sultanpur4.jpg"
        ],
    },
    {
        id: 7,
        title: "Noida – Corporate Interior",
        category: "Commercial / Renovation",
        status: "Ongoing",
        description: "A corporate interior fit-out project in Noida, involving complete renovation and interior development works. The project scope includes space reconfiguration, partitioning, false ceiling systems, flooring and wall finishes, painting, joinery, and lighting and electrical upgrades to enhance workspace functionality and employee comfort.",
        location: "Noida",
        area: "N/A",
        value: "₹60 Lakh",
        images: [
            "/projects/noida-corporate-interior/noidacorporate1.png",
            "/projects/noida-corporate-interior/noidacorporate2.jpg",
            "/projects/noida-corporate-interior/noidacorporate3.jpg",
            "/projects/noida-corporate-interior/noidacorporate4.jpg",
            "/projects/noida-corporate-interior/noidacorporate5.jpg",
            "/projects/noida-corporate-interior/noidacorporate6.jpeg"

        ],
    },
    {
        id: 8,
        title: "CR Park – Residential, Plot A-57",
        category: "Residential / New Construction",
        status: "Completed",
        description: "A residential development project at CR Park, Plot A-57, with a total plot area of 200 gaj (1,800 sqft). The project involved complete civil and architectural works, including structural construction, interior finishes, flooring, wall treatments, painting, joinery, and all associated site development works to create a functional and aesthetically pleasing living space.",
        location: "CR Park, Delhi",
        area: "1,800 sqft",
        value: "N/A",
        images: [
            "/projects/cr-park-a57/crparka57-1.jpg",
            "/projects/cr-park-a57/crparka57-2.jpg"
        ],
    },
    {
        id: 9,
        title: "CR Park – Residential, Plot F-1166",
        category: "Residential / New Construction",
        status: "Completed",
        description: "A residential development project at CR Park, Plot F-1166, with a total plot area of 160 gaj (1,440 sqft). The project involved complete civil and architectural works, including structural construction, interior finishes, flooring, wall treatments, painting, joinery, and all associated site development works to create a functional and aesthetically pleasing living space.",
        location: "CR Park, Delhi",
        area: "1,440 sqft",
        value: "N/A",
        images: [
            "/projects/cr-park-f1166/crparkf1166-1.jpg",
            "/projects/cr-park-f1166/crparkf1166-2.jpg"
        ],
    },
    {
        id: 10,
        title: "CR Park – Residential, E Block",
        category: "Residential / New Construction",
        status: "Completed",
        description: "A residential development project at CR Park, E Block, with a total plot area of 260 gaj (2,340 sqft). The project involved complete civil and architectural works, including structural construction, interior finishes, flooring, wall treatments, painting, joinery, and all associated site development works to create a functional and aesthetically appealing living space.",
        location: "CR Park, Delhi",
        area: "2,340 sqft",
        value: "N/A",
        images: [
            "/projects/cr-park-e-block/crparkeblock1.jpg"
        ],
    },
];
