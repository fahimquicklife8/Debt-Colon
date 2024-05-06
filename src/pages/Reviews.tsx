import React from 'react';

const Reviews: React.FC = () => {
  // Array of color classes to alternate through, with more vibrant and soothing colors
  const colors = [
    "bg-gradient-to-r from-blue-400 via-teal-300 to-green-300", // Caribbean-inspired gradient
    "bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300", // Vibrant sunset-inspired gradient
    "bg-gradient-to-r from-yellow-400 via-orange-300 to-red-300", // Warm tropical hues
  ];

  // Function to get a color class based on the review index
  const getColorClass = (index: number) => colors[index % colors.length];

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-2xl font-bold mb-6">Class Reviews</h1>
      {/* Use a vertical flex layout for stacking */}
      <div className="flex flex-col gap-6">
        {/* First Review */}
        <div className={`rounded-lg p-4 shadow-md text-black ${getColorClass(0)}`}>
          <h2 className="text-xl font-bold mb-2">Review 1</h2>
          <div className="break-words">
            {/* Replace with the plain text of Review 1 */}
            <p>

            <p>
            Within the complex fabric of world health, the fight against tropical illnesses is a 
            symbol of the ongoing struggle between man and environment. 
            Examining José Amador's "Medicine and Nation Building in the Americas, 1890-1940," 
            and Frank Snowden's lecture on the field of tropical medicine, and in-depth lecture from 
            the class that concentrate particularly on disease among Puerto Rican peasants, enables us 
            to explore the complex role that environmental factors play in the spread and treatment of such 
            diseases. This exploration enables a deeper understanding of how scientific discoveries and public 
            health policies interact via these perspectives, revealing the complexities of colonialism, racial and 
            socioeconomic 
            inequality, and the relationship between public health and nation-building. According to topics in week 
            four, environmental conditions had a significant impact on how tropical illnesses developed, spurring advances 
            in science and policy that are indicative of larger historical and social processes.
            </p>

            <p>
            Amador's comprehensive research explores the relationship between nation-building and medicine, 
            showing how the struggle against tropical diseases shaped national identities in the Americas. 
            He painstakingly explains how public health programs served as both political and medical instruments 
            to promote social cohesion and economic growth. On the other hand, Frank Snowden's analysis of the colonial 
            origins of tropical medicine illuminates the field's dual function as a scientific undertaking and a tool of imperial power. 
            His lecture provides important information on how tropical medicine changed from being a colonial instrument to a field of 
            study focused on global health, emphasizing the move from treating illnesses as a matter of control to comprehending their 
            socio environmental causes.
            </p>

            <p>
            Furthermore, through a critical analysis of Amador and Snowden's tales, the complex interactions between sickness, 
            environment, and societal structures are shown, raising concerns about the applicability of their results in the modern day. 
            Public health policies are informed by historical understandings, highlighting the ways in which inequality and colonialism's 
            legacy continue to impact health outcomes. Considering how a more comprehensive knowledge of the history of tropical medicine may 
            influence more equitable health measures today, while also examining the limits and biases inherent in Snowden's colonial viewpoint
             and Amador's historical approach. The class lecture about Puerto Rico’s epidemic provides an insightful example of the close relationship 
             between the social and environmental determinants of health, as well as important takeaways for tackling contemporary global health issues.
            </p>
             

             <p>Additionally, these parts provide a complete picture of the difficulties and nuances involved in the fight against tropical illnesses. 
              Although Amador and Snowden present wide-ranging historical and academic viewpoints, a concentrated study that illustrates the practical 
              implications of these more general factors. Together, they illustrate how human interventions and environmental elements interact to create 
              healthy landscapes—a concept that appears again in other texts assigned for class that discuss the effects of socioeconomic policies and 
              environmental change on global health.
</p>

             <p>Moreover, Amador's historical research highlights the socio-political elements impacting the evolution of medical practices and public 
              health policy throughout the Americas. On the other hand, Snowden takes a more discipline-focused approach, looking at the history of tropical
               medicine during its colonial past, how it developed as a specialty apart from general medicine, and how it relates to contemporary health challenges. 
               The discussion regarding early twentieth century Puerto Rico in class demonstrates the practical effects of historical and environmental factors on public health. 
               When one considers Amador's historical viewpoints in conjunction with Snowden's critique of colonialism in tropical medicine, one finds that the effects of these dynamics 
               are still very much present in public health practices today. For example, Puerto Rican attempts to treat dengue fever show how historical public health practices, such as 
               the infrastructure built during the colonial era and socioeconomic inequities that worsen disease transmission, impact present strategies.
</p>

             <p>Although the writings of Amador and the lecture of Snowden complement each other by presenting distinct analytical scales of wide tropical medicine against discipline-specific 
              medicine, in class we discussed useful examples of their topics, bringing the conversation down to earth in terms of particular, regional results. When combined, these approaches
               provide a comprehensive understanding of the subject, even if they each give varying weight to various facets of the intricate interactions between environment, history, and health. 
               Some of the questions that arose are what ways do the public health policies of today rectify or maintain the disparities that these historical and in class discussions have brought to 
               light? What might other areas facing comparable difficulties learn from Puerto Rico's experience? 
</p>

             <p>In conclusion, this review did not only dissect the historical and socio-political fabric of tropical medicine through 
              Amador's and Snowden's lenses but also critically assessed its implications for contemporary public health policy. 
              By interlacing the specific in class discussion of disease among Puerto Rican peasants with broader themes of colonialism, 
              inequality, and environmental determinants, one can gain valuable insights into the ongoing challenges in global health. 
              This critical engagement underscores the necessity of revisiting and reevaluating historical perspectives to address today's
               public health inequities effectively, urging a forward-looking approach that reconciles past oversights with modern needs.
</p>



<h2>Bibliography</h2><p>Snowden, Frank. “Tropical Medicine as a Discipline.” Lecture, HIST 234: Epidemics in Western Society Since 1600”, Yale Open Course https://oyc.yale.edu/history/hist-234/lecture-15.</p>
<p>AMADOR, JOSÉ. Medicine and Nation Building in the Americas, 1890-1940. Vanderbilt University Press, 2015. https://doi.org/10.2307/j.ctv16759s7</p>

            </p>
          </div>
        </div>

        {/* Second Review */}
        <div className={`rounded-lg p-4 shadow-md text-black ${getColorClass(1)}`}>
          <h2 className="text-xl font-bold mb-2">Review 2</h2>
          <div className="break-words">
            {/* Replace with the plain text of Review 2 */}
            <p>
              <p>In the complicated web that is Caribbean history, the existence of the island of Hispaniola represents a swirling 
                high tide of historical currents, of racial identity, national boundaries, colonization’s living echo. Dubois, Paulino,
                 and García-Peña, and even Michele Stephenson in her documentary Stateless, attempt to unravel these dynamics in that same 
                 shared space. Haiti: The Aftershocks of History offers Dubois’s gaze at Haiti’s economic evolution over time, including the
                  distressing section where he describes a US-centric “if the plan succeeded, many Haitians would be transformed from independent 
                  farmers into field laborers toiling for a foreign master” scenario that turned Haiti’s people from self-sufficient into dependent. 
                  Dividing Hispaniola , The Borders of Dominicanidad, and even Stateless by Stephenson provide a more focused view of cultural and even 
                  political mechanisms that have formed the racial and national self-sense of Dominicans. Together, they offer a more comprehensive view 
                  of the past and present of Hispaniola and make one more probable to imagine how the island’s division is a microcosm of wider global issues 
                  of race, identity, and nationhood and a human track of historical legacy.
</p>
              <p>Published in 2011, Laurent Dubois’s Haiti: The Aftershocks of History describes the social and economic consequences of profits 
                from foreign investments in Haiti. Monoculture plantation allows the economy to shift from various crops grown by rural communities to the 
                field of cash crops, reducing the ability of rural residents to grow crops and fostering a cyclical dependency model. Written by Lorgia 
                García-Peña in 2016, The Borders of Dominicanidad introduces border studies to examine national identity in the Dominican Republic and the 
                construction of racial discourse as well as the diaspora’s lives in the US. “The United States’ centrality in the formation of Dominican racial 
                discourse elucidates the essence of the Dominican element from the transnational perspective. With Edward Paulino’s Dividing Hispaniola published 
                in 2016, the focus shifts from Trujillo’s regime and its reliance on cultural storytelling to understand illustrated range by national identity. 
                The book provides a first-person perspective through Michèle Stephenson’s Stateless in her experience as her-message storyteller; the panorama is, 
                particularly examining Haitian victims of Dominican racism who contribute to a world of constructed boundaries.
</p>
              <p>All these books intertwine with broader class talks of colonialism, post-colonialism, racialization, and national identity. Most importantly, 
                they together show how historical stories and authority witnessed have laid personal and communal identities. For example, Dubois’ retelling of 
                the story of the formation of banana plantations affirms the emergence of the first externally formed economic structures diminishing autonomy 
                with foreign heteronomy to resonate through decades. This contextualizes present-day problems of nationality and racial segregation illustrated 
                in Stateless and The Borders of Dominicanidad . The United States had more subtly influenced the Dominican racial narrative, as said by García-Peña; 
                the fear instigated by the Haitian slave revolt was related to new dominos of color favoring in Haiti and whipping difference in Hispaniola and everywhere. 
                Whereas Paulino’s analysis of the “theater of power” discloses how cultural output was coordinated below Trujillo’s high-chairmanship to endow a specific 
                national story scripted with racist and authoritative regulations. Therefore, the literature pieces firmly ahead of each other to render a large-dimensional 
                impression of Hispaniola’s history. Dubois supplies the wide swatches, while García-Peña and Paulino present focalized probes into how these stories bear 
                shaped the current, with Stateless affording an emotional, human civilization to these impacts. Together, they leave one to suspect the effectiveness of
                 international conventions near statelessness and racial segregation. Stateless upon all asks what to make with Dominicans of Haitian descent, a query 
                 unilaterally untested close historical sources. Granting García-Peña resumes the incorporation by furnishing the possibility for deviation as opposed 
                 to the traditional US-centered race and ethnicity advice, more review wants to compel the effects of such deviations on policies and personal uniqueness.</p>
              <p>The link between history and the contemporary socio-political situations is made clear by a synthesis of these works. And rich tapestry is built, 
                encompassing everything from enduring ties to colonialism to authoritarian cultural tactics to the particular accounts of abuse experienced by women.
                 Behind the scenes, past influences may still be felt in the present, and the investigation and work needed to recognize and right historical wrongs are exposed.
                  The effects of the past are irreversible as one learns more about Hispaniola's history and tale. A crucial concern about the potential for regenerative justice 
                  and the transferability of violence from one generation to the next is raised by the incorporation of knowledge and historical truths into contemporary experiences. 
                  Can the once segregated areas develop to be centers of harmony and comprehension? Thus, the issue raised by Stephenson's Stateless is this: it shows the claimed innate 
                  strength and personal power while also recording the battle.</p>
              <p>The Aftershocks of History, Dividing Hispaniola, The Borders of Dominicanidad, and Stateless: The Synthesis of Haiti not only depicts the boundaries of Hispaniola's 
                divides but also acts as a microcosm for discussions of race, ethnicity, and nationalism that take place across the world. Every component adds a thread to the 
                complex tapestry of a divided yet shared history, requiring us to face the history's legacy and work toward a more equitable future. The accounts and interpretations 
                offered by Dubois, Paulino, García-Peña, and Stephenson force us to think about the boundaries that divide as well as the paths that may be taken by empathetic and 
                understanding communication. One might start to imagine a future where historical differences are acknowledged and addressed rather than being sustained by silence or 
                apathy through such intellectual and narrative investigation. </p>
              <p>In Conclusion, taken together, these books stress the usefulness of an interdisciplinary approach in studying historical and cultural phenomena, 
                and invite us to experience the past so as not only to know about it but to partake in the reflected consequences of events and emerge, perhaps, to a 
                more integrated and caring view of history and its broader patterns in human lives.</p>

              <h2>Bibliography</h2>
              <p>Dubois, Laurent. "Chapter 6." In Haiti: The Aftershocks of History. New York: Metropolitan Books, Henry Holt and Company, 2012. http://www.jstor.org/stable/24344229.
</p>
              <p>GARCÍA-PEÑA, LORGIA. The Borders of Dominicanidad: Race, Nation, and Archives of Contradiction. Duke University Press, 2016. https://doi.org/10.2307/j.ctv123x7pd.</p>
              <p>Paulino, Edward. Dividing Hispaniola: The Dominican Republic’s Border Campaign against Haiti, 1930-1961. University of Pittsburgh Press, 2016. https://doi.org/10.2307/j.ctt19rmcbb.</p>
              <p>Stephenson, Michèle. Stateless [Apátrida]. New York: Women Make Movies, 2020. https://docuseek2.com/wm-stless.
</p>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
