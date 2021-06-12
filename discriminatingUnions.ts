/**
 * using a separate field to distinguish the types in an Union
 * is handy if we have a lot to compare and check
 */

interface Bike {
  type: "Bike";
  name: string;
  mileage: number;
  gear: number;
  top_speed: number;
}

interface Scooter {
  type: "Scooter";
  name: string;
  mileage: number;
  top_speed: number;
}

interface Car {
  type: "Car";
  name: string;
  mileage: number;
  gear: number;
  top_speed: number;
  boot_space: number;
}

type VehicleType = Bike | Scooter | Car;

function vehicleInfo(vehicle: VehicleType) {
  if (vehicle.type === "Car") {
    console.log(`This car has a top speed of ${vehicle.top_speed}`);
  }
}
