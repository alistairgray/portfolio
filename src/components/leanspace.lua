resource "leanspace_nodes" "satellite" {
    node {
        name = "TerraSat"
        description = "The satellite responsible for the terraform mission."
        type = "ASSET"
        kind = "SATELLITE"
        tags {
            key = "Mission"
            value = "Terraform"
        }
        norad_id = "33462"
        international_designator = "33462A"
        tle = [
            "1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927",
            "2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.72125391563537"
        ]
    }
}
resource "leanspace_nodes" "groundstation" {
        node {
            name = "TerraGroundStation"
            description = "The groundstation responsible for the terraform mission."
            type = "ASSET"
            kind = "GROUND_STATION"
            latitude = 13.0344
            longitude = 77.5116
            elevation = 823
            tags {
                key = "Mission"
                value = "Terraform"
        }
    }
}
