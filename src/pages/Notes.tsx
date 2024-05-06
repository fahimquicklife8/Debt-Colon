import React from 'react';

const Notes: React.FC = () => {
  // Define an array of background color classes to cycle through
  const colors = [
    "bg-orange-100",
    "bg-orange-200",
    "bg-green-100",
    "bg-green-200",
    "bg-blue-100",
    "bg-blue-200",
  ];

  // Function to get a color class based on the week index
  const getColorClass = (index: number) => colors[index % colors.length];

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-2xl font-bold mb-6">Class & Reading Notes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Separate sections for each week */}
        <div className={`rounded-lg p-4 shadow-md ${getColorClass(0)}`}>
        <div className='text-black' >

          <h2 className="text-xl font-bold mb-2">Week 1</h2>
          <p><strong>Introduction to the course</strong>, only about 20 people in the class for this course.</p>
            <p><strong>Grade Breakdown:</strong></p>
            <ul className="list-disc pl-5">
              <li><strong>Friday Exercises</strong>: 25%  </li>
              <li>Friday writing based on media provided in syllabus.</li>
              <li><strong>Reviw Paper</strong>: 30% (Two reviews for the class)</li>
              <li><strong>Final Project </strong>: 25%</li>
              <li><strong>Presentation</strong>: 10%</li>
              <li><strong>Final Portfolio</strong>: 15%</li>
              <li><strong>Attendance & Participation</strong>: 20%</li>
            </ul>
            <p><strong>What is Money?</strong></p>
            <ul className="list-disc pl-5">
              <li>Money is something that has value.</li>
              <li>Has a proper unit or quantity.</li>
              <li>Can be stored and transferred easily.</li>
            </ul>
            <p>
              With these three definitions, anything can be money. For example:
            </p>
            <ul className="list-disc pl-5">
              <li>Gold in medieval times.</li>
              <li>Bitcoin in modern times.</li>
            </ul>
            <p>
              Both are examples of money because they fit the criteria mentioned above. However, money is not always what we think of it as. Money can be created by governments in forms of debt, printed money that can be loaned to citizens or other nations.
            </p>
            <p>
              This course covers topics on Debt and Colonialism, and explores what money and capitalism are.
            </p>
            <p>
              <strong>Observation:</strong> professor's child has a different perception of money. Her child believes that as long as a debit/credit card is available, they have money, and that cards are all that matters. This was interesting to me because, growing up in the early 2000s, my perception of money was coins or notes, and I could only buy from a vending machine or store if I had coin change or paper money in my pocket.
            </p>
          </div>
        </div>
        
        <div className={`rounded-lg p-4 shadow-md ${getColorClass(1)}`}>
        <p className="text-black">
          <h2 className="text-xl font-bold mb-2">Week 2</h2>
          
          <strong>Key Aspects</strong>
          <ul className="list-disc pl-5">
            <li> <strong>French Colony</strong>: The Haitian Constitution is written in French 
 </li>
            <li> <strong>US Revolution</strong> : 1775 - 1803 </li>
            <li> <strong>French Revolution</strong>: 1789 - 1799 </li>
            <li><strong>Haitian Revolution</strong> : 1791 - 1804</li>
            <li><strong>Latin America</strong> :  1809 - 1820 </li>
             <li>During these times of Revolution, the Haitians got a hold of what was happening in France, they knew from the salesmen that France was about to overthrow their monarchy 
          </li>
              <li>Haiti previously known as the St. Dominique wanted liberty but not emancipation </li>
                <li>Some of the Haitians didn’t necessarily want to let go of France  </li>
                </ul>
          <p>
           <ul className=' list-disc pl-5'> 
           <li> <strong>Adam Smith</strong>: Father of capitalism and avid enlightenment thinker </li>
           </ul>
          </p>
              <p>
                <ul className='list-disc pl-5'> <strong> Summary of Haiti</strong>:</ul>
              </p>
              <ul className='list-disc pl-5'>
              <li><strong>1804</strong>: Haiti was back to an island again</li>
              <li><strong>1803</strong>: US did not recognize Haiti as an independent nation as US back then was also a big enslaver and supporting Haiti would mean shooting itself in the foot</li>
              <li><strong>Haitians</strong> had very difficult economic conditions, with average life expectancy being 30, not famine, but very difficult living conditions</li>
              <li>As every African nation was colonized, there was this idea that Africans somehow cannot form a nation on their own </li>
              <li>Racism was so intense that people thought black people incapable of running a country. And depicted in the West as if they were an island of monkeys </li>
              <li>Conquistadors were going to Latin America and taking over land & wealth meanwhile</li>
              </ul>
          </p>
        </div>
        <div className={`rounded-lg p-4 shadow-md ${getColorClass(2)}`}>

          <div className='text-black'>
          <h2 className="text-xl font-bold mb-2">Week 3</h2>

<p>
    <strong>Now Open for Business – Wall Street Discovers the Caribbean</strong>
  </p>
  <ul className="list-disc pl-5">
    <li>Exploration of the historical and contemporary economic roles played by major banks like the National City Bank of New York and the Royal Bank of Canada in the Caribbean.</li>
    <li>The studies shed light on the imperialistic and financial strategies employed by these banks to establish and expand their influence in the Caribbean region.</li>
    <li>Acted as a significant financial agent in Haiti, influencing local economic policies and political affairs.</li>
    <li>The bank's operations are an early example of corporate involvement in foreign governance and economic exploitation.</li>
  </ul>
  
  <h3 className="font-semibold">The Royal Bank of Canada in the Caribbean</h3>
  <ul className="list-disc pl-5">
    <li>Provided commercial, retail, and governmental banking services.</li>
    <li>Acted as government depositories and helped float sovereign debt.</li>
    <li>Offered trust services managing estates of Caribbean elites while also targeting the savings of lower-income groups (Indians and Africans).</li>
    <li>The design of the banknotes issued by the Royal Bank depicted colonial imagery, reinforcing the notions of colonial dependency.</li>
    <li>A violent protest against the Royal Bank of Canada highlighted local resistance against foreign economic control.</li>
    <li>Described as "slightly frosty," indicating a dismissive attitude towards local grievances.</li>
  </ul>
  
  <h3 className="font-semibold">Peter James Hudson</h3>
  <ul className="list-disc pl-5">
    <li>Criticized these banks' strategies as neocolonial and aggressive in pursuing their imperialistic goals.</li>
    <li>Highlighted the blend of economic interests and Canadian Anglo-Saxonism driving foreign policy and banking practices.</li>
  </ul>

  <h3 className="font-semibold">Economic Benefits for Banks</h3>
  <ul className="list-disc pl-5">
    <li>Profits derived from diverse sources, including managing wealth, floating debts, and facilitating international trade.</li>
    <li>Offered remittance services to Caribbean workers abroad, tapping into the diaspora's financial activities.</li>
  </ul>

  <h3 className="font-semibold">Social and Economic Impact</h3>
  <ul className="list-disc pl-5">
    <li>The banking services competed with local credit systems and government savings schemes, often to the detriment of local financial autonomy.</li>
    <li>In some regions like Haiti, the bank's operations significantly impacted the local economy without providing reciprocal benefits.</li>
  </ul>

  <p>
    <strong>Summary:</strong> The role of foreign banks in the Caribbean has been a complex dynamic of economic ambition and imperialistic strategy, 
    often at odds with the interests and welfare of local populations.
  </p>
          </div>
        </div>


        <div className={`rounded-lg p-4 shadow-md ${getColorClass(3)}`}>
        <p className="text-black">
          <h2 className="text-xl font-bold mb-2">Week 4</h2>
          
          <div className="text-black">
            <h3 className="font-semibold">Tropical Medicine</h3>
            <ul className="list-disc pl-5">
              <li>Advancements in scientific and biological research have illuminated the intricate relationship between disease and the environment.</li>
              <li>Environmental factors such as pollution, inadequate sanitation, and access to clean water significantly impact public health outcomes.</li>
              <li>Diseases often flourish in environments characterized by poverty, overcrowding, and lack of basic amenities.</li>
              <li>Understanding this relationship has led to increased recognition of the importance of addressing social determinants of health to combat disease effectively.</li>
            </ul>
            
            <h3 className="font-semibold">Hope VI Eradication-Revitalization Grants</h3>
            <ul className="list-disc pl-5">
              <li>Aimed at addressing housing issues, including demolition, rehabilitation, and new construction of public housing.</li>
              <li>Funds also used for land acquisition, resident relocation, and community support services.</li>
            </ul>

            <h3 className="font-semibold">Coffee Industry in Puerto Rico</h3>
            <ul className="list-disc pl-5">
              <li>Once the world's second-largest coffee exporter.</li>
              <li>Predominantly small plantations situated in mountainous regions.</li>
              <li>Peasants endured impoverished conditions.</li>
            </ul>

            <h3 className="font-semibold">Colonial Influence and Hurricane Impact</h3>
            <ul className="list-disc pl-5">
              <li>The U.S. initially favored sugar production over coffee.</li>
              <li>After a devastating hurricane, Colonel Bailey Kelly Ashford, an American physician, arrived in Puerto Rico.</li>
            </ul>

            <h3 className="font-semibold">Health Challenges and Medical Intervention</h3>
            <ul className="list-disc pl-5">
              <li>Post-hurricane, desegregation of coffee plantations occurred, leading to widespread illness and displacement.</li>
              <li>Residents exhibited signs of malnutrition and anemia.</li>
              <li>Introduction of unfamiliar foods, such as red meat and milk, exacerbated health issues.</li>
              <li>Medical examinations revealed previously unknown parasites, challenging existing beliefs about disease transmission.</li>
              <li>Lack of understanding about medicine and health in the early 20th century contrasted with contemporary overmedicalization and widespread presence of pharmacies in Puerto Rico.</li>
            </ul>

            <h3 className="font-semibold">Environmental Concerns and Pharmaceutical Industry</h3>
            <ul className="list-disc pl-5">
              <li>Toxic sites resulting from pollution necessitated remediation efforts, funded through taxes.</li>
              <li>Large pharmaceutical sites operating in Puerto Rico from the 1970s to the 1990s contributed to environmental pollution.</li>
              <li>The nexus of medical experimentation, pollution, and the subsequent need for remediation led to a rapid increase in medicalization.</li>
              <li>Instances of reproductive coercion, including sterilization and birth control, underscored the complex relationship between health initiatives and individual autonomy.</li>
            </ul>
          </div>
          </p>
        </div>

        <div className={`rounded-lg p-4 shadow-md ${getColorClass(4)}`}>
        <p className="text-black"> 

          <h2 className="text-xl font-bold mb-2">Week 5</h2>
          <div className="text-black">
            <h3 className="font-semibold">The Silver Women</h3>
            <ul className="list-disc pl-5">
              <li>Experienced segregation and racial prejudice.</li>
              <li>Played a vital part in maintaining social reproduction and labor mobility.</li>
              <li>Avoided being apprehended by the police.</li>
              <li>Asked for equitable treatment and proved their credibility in local courts.</li>
              <li>Survival of Black women in Panama was mostly dependent on individual battles.</li>
              <li>Records frequently ignore the accomplishments of West Indian women.</li>
              <li>Reduced them to objects of sex.</li>
              <li>Conducted business in the market and supplied workers for imperial plans.</li>
              <li>Resisted the marital customs of colonialism; moved to Panama for financial reasons.</li>
              <li>Had difficulties obtaining housing.</li>
              <li>Challenged gender norms by positively impacting Panama's economy.</li>
            </ul>
            
            <h3 className="font-semibold">Arrival of Ladies from Martinique</h3>
            <ul className="list-disc pl-5">
              <li>Charges related to prostitution.</li>
              <li>Divergent opinions about ethics and work procedures.</li>
              <li>Caused modifications to the Canal's management.</li>
            </ul>

            <h3 className="font-semibold">Controlling Closeness</h3>
            <ul className="list-disc pl-5">
              <li>In Panama, prostitution is still permitted in several cities.</li>
              <li>Most likely had clear divisions.</li>
            </ul>

            <h3 className="font-semibold">Writing Assignment</h3>
            <p>
              <strong>"A remapping of the relationship between capital, empire, and labor accompanied emancipation in the Caribbean."</strong>
            </p>
            <ul className="list-disc pl-5">
              <li>Slave labor played a significant role in several of these economies.</li>
              <li>Following their emancipation, slaves had to find new markets.</li>
              <li>Had to come up with other strategies to mistreat and abuse Black laborers.</li>
              <li>Poor working conditions, low pay, etc.</li>
              <li>Still needed to figure out how to rule over Black and indigenous people.</li>
              <li>Had to become an informal empire after becoming a formal one.</li>
              <li>Used tactics like "dollar diplomacy".</li>
              <li>Denying Black and Indigenous people their rights in many ways.</li>
              <li>Limiting their entitlements.</li>
              <li>Separation and limiting the availability of healthcare and education.</li>
              <li>Most likely established rigid boundaries to preserve control between racial and ethnic groupings.</li>
            </ul>
          </div>
          </p>
        </div>

        <div className={`rounded-lg p-4 shadow-md ${getColorClass(5)}`}>
        <p className="text-black">
          <h2 className="text-xl font-bold mb-2">Week 6</h2>
          <div className="text-black">
            <h3 className="font-semibold">From Isolation to Active Interventionism</h3>
            <ul className="list-disc pl-5">
              <li>The United States used military force in several territories, among them Cuba, the Philippines, Nicaragua, and the Dominican Republic, mostly by toppling existing regimes, allegedly in the mission to spread democratic and capitalist ideologies.</li>
              <li>U.S. expansionism epitomized how America shied away from the annexation of all Spanish America, instead opting for control over Cuba, Puerto Rico, the Philippines, and Guam after the war.</li>
              <li>Mark Twain criticized U.S. intervention in the Philippines and compared their actions to those of European imperial powers.</li>
              <li>Twain viewed these actions as a form of hidden colonialism, masked by patriotism and national uplift, forcing U.S. ideals down foreign populations' throats.</li>
            </ul>
            
            <h3 className="font-semibold">Cultural and Educational</h3>
            <ul className="list-disc pl-5">
              <li>
                <strong>Education in the Colonized Territories:</strong> In the Philippines, education was founded on American history and ideals, excluding local histories and perspectives.
              </li>
              <li>
                <strong>Media and Public Perceptions:</strong> U.S. media played a significant role in shaping dominant narratives and influencing public perceptions of colonization efforts, justifying control of foreign territories.
              </li>
            </ul>
            
            <h3 className="font-semibold">Long-term Effects</h3>
            <ul className="list-disc pl-5">
              <li>
                The legacies of these policies are still evident, with historical narratives from the media influencing current events. Educational and media institutions continue to follow specific political agendas.
              </li>
            </ul>

            <p><strong>No class next Wednesday!</strong></p>
          </div></p>
        </div>


        <div className={`rounded-lg p-4 shadow-md ${getColorClass(0)}`}>
        <p className="text-black">   
          <h2 className="text-xl font-bold mb-2">Week 7</h2>
          
          <div className="text-black">
            <h3 className="font-semibold">Freedom Roots: Histories from the Caribbean, Chapter 4</h3>
            <ul className="list-disc pl-5">
              <li><strong>Themes</strong>: Human impacts both the history and results of military occupations in the Caribbean, paying strong attention to the relationship between colonial ambitions and local resistance.</li>
              <li>The chapter details how Caribbean societies navigated and resisted external military and economic pressures throughout history.</li>
            </ul>
            
            <h3 className="font-semibold">Podcast "The Great War: Banana Wars: When US Marines Fight for Big Fruit"</h3>
            <ul className="list-disc pl-5">
              <li>U.S. military interventions in Central America in the early 1920s continue to be hotly debated.</li>
              <li>The "Banana Wars" were mostly instigated by American corporate interests represented by the United Fruit Company and geopolitical strategies.</li>
            </ul>

            <h3 className="font-semibold">Policy and Economic Forces</h3>
            <ul className="list-disc pl-5">
              <li>Central America was of major importance due to its geographic location for shipping, highlighted by the building of the Panama Canal.</li>
              <li>The development of the United Fruit Company epitomized how economic interests positively related to political stability and policy in the region.</li>
              <li>The rise to power of the United Fruit Company shows how corporate interests and geopolitical strategy are interconnected.</li>
            </ul>
            
            <h3 className="font-semibold">Military Intelligence and Dollar Diplomacy</h3>
            <ul className="list-disc pl-5">
              <li>The U.S. Marines were deployed in Honduras and Nicaragua to safeguard American commercial interests and political stability.</li>
              <li>This policy tended to strengthen American economic supremacy through military and political means, at the expense of local sovereignty.</li>
            </ul>

            <h3 className="font-semibold">Impact of Foreign Meddling</h3>
            <ul className="list-disc pl-5">
              <li>
                Such interventions breed instability, serving foreign powers' interests to the detriment of local development, undercutting local government autonomy.
              </li>
              <li>
                "Imperialism, colonialism, and economic exploitation imposed authority on lesser governments, frequently at the price of stability and local sovereignty."
              </li>
              <li>
                It is an ethical question whether foreign intervention can be justified given its long-term negative impact on societies involved.
              </li>
            </ul>

            <p>
              <strong>In short:</strong> A complex relationship exists between political machinations, economic imperatives, and military force in Central American history.
            </p>
            <ul className="list-disc pl-5">
              <li>Highlights the struggles of advancing sovereignty and development in regions with a history of foreign domination.</li>
            </ul>
          </div>
           </p>
        </div>


        <div className={`rounded-lg p-4 shadow-md ${getColorClass(1)}`}>
        <p className="text-black">    
          <h2 className="text-xl font-bold mb-2">Week 8</h2>
          <div className="text-black">
            <h3 className="font-semibold">The Militarization of Border Zones</h3>
            <ul className="list-disc pl-5">
              <li>
                The militarization of border zones, like that of Utah, highlights modern borders as complex regions of surveillance and control.
              </li>
              <li>
                The incessant flow of people across borders, particularly from Mexico to the USA, presents dynamic migration patterns.
              </li>
              <li>
                Historical changes in migration, such as during the banana crisis, provide insight into changes in the socio-political landscape.
              </li>
            </ul>
            
            <h3 className="font-semibold">Emigration Trends</h3>
            <ul className="list-disc pl-5">
              <li>
                Haiti once had strong emigration to Puerto Rico, reflecting changes in migration trends due to political and economic crises.
              </li>
              <li>
                Racism in Haiti remains deeply rooted, leading to struggles and a high degree of complex racial orientation.
              </li>
              <li>
                Trujillo, a light-skinned Dominican of Haitian descent, wielded military power to define the political stage of the Dominican Republic.
              </li>
              <li>
                His power grab was sanctioned by the U.S., whose policies glossed over complicated relations between leaders, ethnicity, and external influences.
              </li>
            </ul>
            
            <h3 className="font-semibold">Cultural Significance of Haiti</h3>
            <ul className="list-disc pl-5">
              <li>
                Classified as a cultural paradise with natural resources, Haiti has potential for tourism, but travel safety remains a concern.
              </li>
              <li>
                The nation has deep cultural ties rooted in spirituality and magic, often seen in opposition to Christian faith.
              </li>
            </ul>
            
            <h3 className="font-semibold">"Black Majority" by John W. Vandercook</h3>
            <ul className="list-disc pl-5">
              <li>
                An important source shedding light on Haiti's racial and cultural relations issues.
              </li>
            </ul>
            
            <h3 className="font-semibold">Elian Gonzalez Story</h3>
            <ul className="list-disc pl-5">
              <li>
                The story of Elian Gonzalez, a boy entangled in migration challenges and personal loss, humanizes a political and social conflict.
              </li>
              <li>
                Differing visions of a Cuba and Haiti open to U.S. influence reflect perceptions of the political stability and economic viability of the Caribbean.
              </li>
            </ul>
          </div>
          </p>
        </div>


        <div className={`rounded-lg p-4 shadow-md ${getColorClass(2)}`}>
        <p className="text-black">
          <h2 className="text-xl font-bold mb-2">Week 9</h2>
          Spring Break - No Class
          <p>“It is the working man who is the happy man. It is the idle man who is the miserable man” Benjamin Franklin</p>
  
          </p>
        </div>


        <div className={`rounded-lg p-4 shadow-md ${getColorClass(3)}`}>
        <p className="text-black">
          <h2 className="text-xl font-bold mb-2">Week 10</h2>
           <div className="text-black">
            <h3 className="font-semibold">Readings</h3>
            <ul className="list-disc pl-5">
              <li>Edward Paulino, *Dividing Hispaniola: The Dominican Republic’s Border Campaign Against Haiti, 1930-1936*, pp. 36-83</li>
              <li>Lorgia García-Peña, *The Borders of Dominicanidad: Race, Nation, and Archives of Contradiction*, Ch. 2</li>
              <li>*Stateless* Documentary (2020)</li>
            </ul>

            <h3 className="font-semibold">Documentary Themes</h3>
            <ul className="list-disc pl-5">
              <li>Nationality, race, and statelessness in the complex relationship between Haitian immigrants and the Dominican Republic.</li>
              <li>Explores historical and contemporary divides and the intricate relationship between Haiti and the Dominican Republic.</li>
              <li>Racial and national identities shaped by historical events, highlighting the Dominican Republic's border campaign against Haiti.</li>
              <li>Trujillo's regime, racial and nationalist ideologies that fueled these policies.</li>
              <li>Dominican national identity constructed through racial discourse influenced by U.S. policies and perspectives.</li>
              <li>Racialized nationalism constructed Dominican identity in opposition to Haitian identity, often through exclusionary practices.</li>
              <li>How state policies contribute to the marginalization of Haitian descendants in the Dominican Republic, dramatically depicted in "Stateless."</li>
            </ul>

            <h3 className="font-semibold">Personal Reflections</h3>
            <ul className="list-disc pl-5">
              <li>
                The readings and film highlight how historical legacies of colonialism and racial ideologies continue to impact present-day relations and individual lives.
              </li>
              <li>
                "Stateless" provides a personal and emotional narrative that complements the academic analyses by Paulino and García-Peña, offering distinguished perspectives.
              </li>
            </ul>
          </div></p>
        </div>
        <div className={`rounded-lg p-4 shadow-md ${getColorClass(4)}`}>
        <p className="text-black">
          <h2 className="text-xl font-bold mb-2">Week 11</h2>
          <div className="text-black">
            <h3 className="font-semibold">Cuba's Complex History</h3>
            <ul className="list-disc pl-5">
              <li>
                Focus on the periods of revolution and the imposition of embargos, especially concerning U.S. relations.
              </li>
              <li>
                U.S. policies, including economic sanctions and diplomatic isolation, have influenced Cuba's political and economic landscape.
              </li>
              <li>
                Ideals of the Cuban Revolution contrasted against practical challenges, particularly in light of U.S. sanctions.
              </li>
            </ul>
            
            <h3 className="font-semibold">Examination of Long-term Effects</h3>
            <ul className="list-disc pl-5">
              <li>
                Examines the long-term economic and social impact of the U.S. embargo on Cuba, affecting daily life and international relations.
              </li>
              <li>
                Cuban society has adapted to economic pressures, showcasing the resilience and ingenuity of the Cuban people.
              </li>
              <li>
                Broader geopolitical implications of U.S.-Cuba relations, considering global context and other international actors' roles.
              </li>
            </ul>

            <h3 className="font-semibold">Post-Soviet Cuba</h3>
            <ul className="list-disc pl-5">
              <li>
                After the Soviet Union fell in 1991, Cuba's economy suffered significantly, leaving Cuba in economic misery.
              </li>
              <li>
                The year 1992 was one of the hardest for Cuba, with many suffering Cubans migrating to the U.S.
              </li>
            </ul>
          </div></p>
        </div>
        <div className={`rounded-lg p-4 shadow-md ${getColorClass(5)}`}>
        <p className="text-black">
          <h2 className="text-xl font-bold mb-2">Week 12</h2>
          <div className="text-black">
            <h3 className="font-semibold">Global Capitalism and Creativity in Cuba</h3>
            <ul className="list-disc pl-5">
              <li>Global capitalism around Cuba, with Americans keen to earn money.</li>
              <li>Cuba is known for its bolero music, dance, and vibrant cultural scene.</li>
            </ul>
            
            <h3 className="font-semibold">Dr. Jimenez's Friend's Experience</h3>
            <ul className="list-disc pl-5">
              <li>Dr. Jimenez's friend, a Latin American, returned from Cuba with USB keys containing internet data and Cuban comic books.</li>
            </ul>

            <h3 className="font-semibold">Internet Breach</h3>
            <ul className="list-disc pl-5">
              <li>Foreigners coming and going from Cuba have been changing the narratives around the country.</li>
            </ul>

            <h3 className="font-semibold">Video on La Habana, 1994</h3>
            <ul className="list-disc pl-5">
              <li>
                In the summer of 1994, after the Soviet Union fell, the Cuban economy collapsed, leading to widespread famine and mass protests.
              </li>
              <li>
                Many Cubans fled the country, desperate to escape conditions similar to those depicted in the movie *Scarface*.
              </li>
            </ul>

            <h3 className="font-semibold">Elian Gonzalez and Politics</h3>
            <ul className="list-disc pl-5">
              <li>
                Elian Gonzalez became a Cuban lawmaker and was pro-Fidel Castro, though this was controversial due to his status as a Cuban immigrant.
              </li>
              <li>
                Miami Cubans, mostly affluent and influential, didn't appreciate the Cuban majority in Florida.
              </li>
              <li>
                United States Senator Ted Cruz, a prominent Republican, has been the Texas Senator since 2013.
              </li>
            </ul>

            <h3 className="font-semibold">Why Are Wealthy Cuban-Americans Republican?</h3>
            <ul className="list-disc pl-5">
              <li>
                When Castro took office, many lost their properties, and that anger has been passed down through generations.
              </li>
            </ul>
          </div></p>
        </div>
        <div className={`rounded-lg p-4 shadow-md ${getColorClass(0)}`}>
        <p className="text-black">
          <h2 className="text-xl font-bold mb-2">Week 13</h2>
           <div className="text-black">
            <h3 className="font-semibold">Monday - No Class</h3>
            <ul className="list-disc pl-5">
              <li>No class due to the solar eclipse.</li>
            </ul>
            
            <h3 className="font-semibold">Wednesday - After Eclipse</h3>
            <p>
              Once upon a time, I asked myself an important question, "If I die today, what do I leave behind?" This profound question is something many people don't consider. 
            </p>
            <p>
              400 trillion to one is the chance of an individual being born. We are lucky to exist and experience life. We should embrace every moment, drink in the sunsets and sunrises, and savor the majestic sky above.
            </p>
            <p>
              However, material wealth has little impact on others. What matters is how we celebrate life because we have won the lottery. The solar eclipse in Austin, Texas, on April 8, 2024, was a moment to experience and celebrate!
            </p>
          </div></p>
        </div>


        <div className={`rounded-lg p-4 shadow-md ${getColorClass(1)}`}>
        <p className="text-black">
          <h2 className="text-xl font-bold mb-2">Week 14</h2>
           <div className="text-black">
            <h3 className="font-semibold">Puerto Rico's Unjust Debt</h3>
            <h4 className="font-semibold">Background</h4>
            <ul className="list-disc pl-5">
              <li>
                Bonds backed the state, perceived as generally safer investments compared to riskier options.
              </li>
              <li>
                Emergence of "vulture funds" like Aurelius Investments, LLC, which capitalize on distressed sovereign debt.
              </li>
            </ul>
            
            <h4 className="font-semibold">Trigger Events</h4>
            <ul className="list-disc pl-5">
              <li>2006: Phase-out of Section 936 of the US tax code, affecting Puerto Rico's economy.</li>
              <li>2014: Puerto Rico bonds devalued to "junk" status, indicating heightened risk.</li>
              <li>June 2015: Governor Garcia Padilla declares Puerto Rico's debt "unpayable."</li>
            </ul>

            <h4 className="font-semibold">Legal Battles and Turning Points</h4>
            <ul className="list-disc pl-5">
              <li>June 2016:</li>
              <ul className="list-disc pl-5">
                <li>
                  June 9: *Puerto Rico v. Sánchez Valle* raises questions about Puerto Rico's sovereignty under the Dual Sovereign exception of the 5th Amendment.
                </li>
                <li>
                  June 13: *Puerto Rico v. Franklin California Tax-Free Trust et al.* reveals the legal complexities of Puerto Rico's debt restructuring.
                </li>
                <li>
                  June 30: Puerto Rico Oversight, Management, and Economic Stability Act (PROMESA) enacted, marking a significant intervention by the US Congress.
                </li>
              </ul>
            </ul>
            
            <h4 className="font-semibold">PROMESA and Financial Oversight</h4>
            <ul className="list-disc pl-5">
              <li>June 30, 2016: Congress passes PROMESA.</li>
              <li>
                The Financial Oversight Management Board (FOMB or La Junta) comprises seven members appointed by the President, plus one non-voting seat.
              </li>
              <li>
                Puerto Rico's Governor serves as a non-voting eighth member.
              </li>
              <li>
                The Board can designate "covered entities," including the Commonwealth of Puerto Rico, subject to oversight.
              </li>
            </ul>

            <h4 className="font-semibold">Key Responsibilities</h4>
            <ul className="list-disc pl-5">
              <li>Development of a fiscal plan for Puerto Rico's economic recovery.</li>
              <li>Authority to restructure debt through PROMESA bankruptcy provisions.</li>
              <li>Ability to veto Puerto Rican legislation conflicting with FOMB's objectives.</li>
            </ul>

            <h4 className="font-semibold">Outcomes and Challenges</h4>
            <ul className="list-disc pl-5">
              <li>September 30, 2016: FOMB designates the Commonwealth of Puerto Rico as a covered entity.</li>
              <li>
                Ongoing efforts navigate Puerto Rico's complex financial landscape, balancing fiscal stability with socio-economic needs while addressing concerns about democratic representation and sovereignty.
              </li>
            </ul>
          </div></p>
        </div>

        <div className={`rounded-lg p-4 shadow-md ${getColorClass(1)}`}>
        <p className="text-black">
          <h2 className="text-xl font-bold mb-2">Week 15 & 16</h2>
           <div className="text-black">
            <h3 className="font-semibold">Introduction</h3>
            <ul className="list-disc pl-5">
              <li>
                This course was reading-heavy and lecture-heavy, covering a lot of material.
              </li>
              <li>
                A static portfolio website will be built with several sections to present the final portfolio.
              </li>
              <li>
                Slides or cliche templates can't fully cover the depth of this material, so a custom website is more suitable.
              </li>
            </ul>
            
            <h3 className="font-semibold">Design Objectives</h3>
            <ul className="list-disc pl-5">
              <li>Using Vite JS and Tailwind CSS to design a static website layout.</li>
              <li>
                Key objectives: Include sections like themes, dynamics, notes, episodes, and podcasts related to the course.
              </li>
              <li>
                The home page will allow users to navigate these sections easily.
              </li>
            </ul>

            <h3 className="font-semibold">Themes</h3>
            <ul className="list-disc pl-5">
              <li>
                <strong>Debt:</strong> This four-letter word has a deep impact, particularly due to interest. Debt was used by colonizers and financial institutions to enslave people.
              </li>
              <li>
                <strong>Racism:</strong> The root of evil or dictatorial regimes starts with extremist views, such as the Dominican Republic's treatment of Haitian migrants and individuals of African descent.
              </li>
            </ul>

            <h3 className="font-semibold">Episodes</h3>
            <ul className="list-disc pl-5">
              <li>
                <strong>Life and Debt:</strong> Highlights the horrible effects of debt on people's lives.
              </li>
              <li>
                <strong>The Cuba Libre Story:</strong> Showcases the extremeness of dictatorial regimes on everyday civilians.
              </li>
            </ul>

            <h3 className="font-semibold">Personal Goals</h3>
            <ul className="list-disc pl-5">
              <li>
                Create a resource that others will find useful for future reference and serve as a summary of key themes and dynamics.
              </li>
              <li>
                The website will provide access to notes, podcasts, and trailers, alongside reviews.
              </li>
            </ul>

            <h3 className="font-semibold">Summary</h3>
            <ul className="list-disc pl-5">
              <li>
                A static website, publicly hosted, will feature sections covering themes, dynamics, and personal insights.
              </li>
              <li>
                A shareable link will allow anyone to access the website from their phone or computer.
              </li>
            </ul>
          </div></p>
        </div>
      </div>
    </div>
  );
};

export default Notes;
