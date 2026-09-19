import Step3Page from '../../../feature/step3/Step3Form';

interface PageProps {
  params: Promise<{
    option: 'monthly' | 'yearly';
  }>;
};

export default async function Page({ params }: PageProps) {
  const { option } = await params;
  console.log(option)
  return (
    <div className="pageContainer">
      <h1>Pick add-ons</h1>
      <div className="caption">Add-ons help enhance your gaming experience</div>
      <Step3Page choice={option} />
    </div>
  );
}
