import FeatureItem from "./FeatureItem";

const FeatureSection = () => {
  return (
    <div className="flex justify-center pb-64">
      <div className="w-full flex flex-col max-w-6xl">
        <div className="text-center font-ubuntu text-violet-900 text-3xl px-2 mb-8">
          Proudly Disapointing Users, since 2016
        </div>
        <div className="flex flex-wrap justify-center">
          <FeatureItem
            image="https://static-task-assets.react-formula.com/259977.png"
            title="Safe and Secure"
            description="We use advanced encryption and will never sell your data, while you are looking."
          />
          <FeatureItem
            image="https://static-task-assets.react-formula.com/384389.png"
            title="Debugging Help"
            description="When errors occur, we will dispatch a group of skilled coding monkeys to assist."
          />
          <FeatureItem
            image="https://static-task-assets.react-formula.com/683765.png"
            title="Artificially Intelligent"
            description="We have more than a decade of experience copying from Google."
          />
          <FeatureItem
            image="https://static-task-assets.react-formula.com/657689.png"
            title="Advanced Analytics"
            description="We actually don't know what this means; but it sells well."
          />
          <FeatureItem
            image="https://static-task-assets.react-formula.com/742903.png"
            title="Cloud Computing"
            description="50% of the time, our servers are up 100% of the time."
          />
          <FeatureItem
            image="https://static-task-assets.react-formula.com/545388.png"
            title="24/7 Customer Support"
            description="We have catchy music that we'll play when we put you on hold for hours."
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
