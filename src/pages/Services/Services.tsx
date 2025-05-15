import ServicesHeader from "../../components/Services/ServicesHeader";
import RepairMaintenance from "../../components/Services/RepairMaintenance";
import CustomBuild from "../../components/Services/CustomBuild";
import RentalServices from "../../components/Services/RentalServices";
import ServiceContact from "../../components/Services/ServiceContact";

const Services = () => {
  return (
    <section className="py-8">
      <ServicesHeader />

      <div className="space-y-8">
        <div className="space-y-4">
          <h4>Repairs & Maintenance</h4>
          <RepairMaintenance />
        </div>

        <div className="space-y-4">
          <h4>Custom Builds</h4>
          <CustomBuild />
        </div>

        <div className="space-y-4">
          <h4>Rental Services</h4>
          <RentalServices />
        </div>
      </div>

      <ServiceContact />
    </section>
  );
};

export default Services;
