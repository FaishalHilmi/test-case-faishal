import Accordion from "../molecules/Accordion";

export default function QuestionTemplate() {
  const accordionItem = [
    {
      title: "What is FowardIt",
      description:
        "FowardIt is a powerful communication management tool that simplifies message forwarding, enhances contact management, and streamlines campaign scheduling for businesses of all sizes.",
    },
    {
      title: "What is FowardIt",
      description:
        "FowardIt is a powerful communication management tool that simplifies message forwarding, enhances contact management, and streamlines campaign scheduling for businesses of all sizes.",
    },
    {
      title: "What is FowardIt",
      description:
        "FowardIt is a powerful communication management tool that simplifies message forwarding, enhances contact management, and streamlines campaign scheduling for businesses of all sizes.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-11 lg:py-32 flex items-center justify-center bg-transparent relative"
    >
      <div className="px-9 lg:px-[150px] lg:ms-24 items-center relative z-20">
        <div className="lg:ps-12">
          <h6 className="text-xl font-bold text-white font-lexend text-center mb-16">
            Frequently Asked Question
          </h6>
          <div className="content">
            <div className="content-wrapper">
              <div className="search mb-9">
                <form>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      className="rounded-md p-1 w-full lg:w-[512px] text-black"
                    />
                    <img src="/images/search.png" className="w-4" />
                  </div>
                </form>
              </div>
              <div className="accordion flex flex-col gap-2 w-[277px] lg:w-[558px]">
                {accordionItem.map((accordion, index) => (
                  <Accordion
                    title={accordion.title}
                    content={accordion.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
