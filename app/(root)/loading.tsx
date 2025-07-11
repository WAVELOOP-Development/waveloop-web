import { PageLoader } from "@/components/ui/page-loader";

export default function Loading() {
  return (
    <PageLoader
      variant="spinner"
      duration={3000}
      loadingText="Loading WAVELOOP..."
      className="bg-[#000511]"
    />
  );
}
