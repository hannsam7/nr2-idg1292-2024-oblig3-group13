Main contributions to the group assignment
My main contributions to the assignment where the text boxes and their styling and information. As well as the page about the UN goal.

Main changes
The changes done to my version of the assignment where all based on our group presentation feedback, as well as some personal ideas. 
We were informed that our pages lacked certain aspects, so I took it upon myself to fix and improve the webpage. 
The biggest change of them all was the title. Instead of just “fast fashion” the title is now “fashion´s dark reality”. 
This is done to give the page more depth and intrigue the reader. 

Next change was the background of the waste land. It was before too cheerful and did not reflect the topic well. 
So, I changed the color palette to darker shades to ensure a sadder setting that fits well with the text. 
As well as making the dark clouds more dominant and making the text look like a big cloud of smoke. 
Also highlighting some important words in the text to create an easier to read text. I did that with all the text on the website.

The brands website had a lot of different effects, that did not make a lot of sense. 
So, I decided to drop the animations and instead create on click text boxes that pop up with more information about why these brands are morally bad. 

At last, I created a summary page with advice for the reader. To show a small summary of the information shown on the website. 
As well as give a reminder to the reader about the importance of our everyday choices and how they impact our planet.

Accessibility considerations
I choose to use intersection observers reduced motion to reduce the motion of the clothing raining at the begging of the page, and the sweater property. 
This is to ensure a slower and smoother experience for those with motion sensitivity. 
As well as opting for bigger text sizes, highlighting important words and making the space between lines bigger. All to ensure an easier reading experience to all users. 

Sustainability considerations
The use of svg compared to other raster images, has ensured a more sustainable design. 
This is due to svg´s being smaller in size, which ensures faster loading times and reduced bandwidth usage. 
By making the svg simple in style and removing unnecessary elements, they are then furthermore sustainable. 
Svg´s are also resolution independent, which means that they can be scaled without loss of quality. 
This versatility ensures no need for different versions of the same image, which makes the page more efficient therefore more sustainable. 

Highlight learning outcomes
This assignment taught me to focus on the message behind the webpage. 
This message is not only delivered through its content, but also through animations, color palets and styles. 
Storytelling is not only about the text written on the page, but also about the theme that will help deliver the message. 
Having fun animations when telling a sad story about child labor, isn´t always the right choice. 
Therefore understanding the setting and not just coding certain things just because you can, are crucial to the overall user experience.

If I could start from the beginning I would have a bigger focus on the message and how to implement it through out my work. 
Finding a balance between programming for the visual aspect and the meaning of the page it self, it important. 
Therefore I would try to keep a more distinctive theme through out the whole website in order to give the user a clear message of what the page is ment to do. 

Storyboard:
The visual implementation of the story board is a “slide show”. Where each section represents the idea process of our story telling website. 
The storyboard includes all the important attributes for the webpage. The webpage itself is 5 sections filled with information and visual 
effects. These further include animations. In the first section instead of having text underneath the title, we have a svg behind the title. 
The svg is of a dumping pile full of clothes. This is done due to wanting to create a better visual appeal to make a more interesting page. 
This also causes the title to stand out more and creates a good starting point for what the visuals of this page will be. As well as creating 
more drama for the title. The point of the storyboard is that is serves as a visual guide to the thought process and production of a website. 
Its a good tool for both programmers and designers, to use as a base. Whereas it also serves as a good visual for what the final example for 
the page will look like.


Points discussed during brainstorming:
plastic waste
womens rights and gender equality
sustainable development
fast fashion


Project overview and purpose:
The purpose of this project is to highlight the biggest problems regarding fast fashion. 

The first major problem is the amount of waste that is produced, due to the trend cycle being shorter than ever, micro trends gaining more 
traction and the poor quality of the clothing produced. The trend cycles being shorter causes people to throw away their clothes due to 
them no longer being on trend. Even if you were to keep your clothes longer than a trend cycle, it’ll might fall apart due to the poor quality 
and craftsmanship. The poor quality is almost a requirement, so that the garment will be cheaper to produce and can be sold at a lower price.

The second major problem comes from one of the other factors that causes the clothing to be cheap; the sweatshops and the pay of the people 
who work there. Sweatshops are dingy factories with poor working conditions which often causes serios health problems for their workers. The 
workers are paid as good as null and void, for about 2,18 kroner an hour, during gruelling work hours that’s sometimes in stretches of 72 
hours without sleep (https://www.theworldcounts.com/challenges/consumption/clothing/sweatshop-facts ). Sometimes the pay is docked or they 
have to pay a fine if a garment is sewed incorrectly or not produced fast enough. A lot of young poor children are forced to work under these 
conditions, instead of going to school, due to their family’s circumstance. This is not only an environmental issue, but also a human rights 
issue.

A lot of the brands that we shop our clothes from are fast fashion, and sometimes we aren’t aware of it. Some of them presents themselves as 
a mid luxury brand, like Zara. Others are cheap enough for everyday people to get the clothes they need, but expensive enough for us to 
believe that the people that makes the clothes earn a liveable wage, like H&M. Some are more obvious, like Shein.


General process:
We started by choosing our UN goal. We thought about both goal 5 (gender equality) and goal 12 (responsible consumption and production), and 
ended up on UN goal 12. We thought about making a story of plastic waste, but ended up at fast fashion. One could also think about how much 
plastic is in our clothing (polyester, nylon, elastane, acrylic, etc.). We first made a storyboard of a t-shirt and the fast fashion process 
it goes through, where the t-shirt would have a sticky effect. We still have a t-shirt in all of the stages, but it isn’t following the story 
of one singular t-shirt. Vilja then made a lot of SVGs, like the landfill with the tractor and the city of factories and the children. Some of 
the SVGs and some singular parts of the SVGs where then animated in a motion sensitivity friendly way (no abrupt or unexpected movements).


Technology stack and list of animations:

We have made all the SVGs in adobe illustrator and implemented them in html using the SVG code.
Most of the animations is made by using keyframes, but some of them is GSAP.
Keyframes:
- clouds (transform: translate)
- tractor (transform: translate)
- tractor shovel and clothes (transform: rotate) (clothes also have opacity)
- chimney smoke (transform: scale)
- sewing kid (transform: translate)
- logos (transform: scale and rotate)
GSAP:
- raining clothes
- second-hand kids
- the last logo

For story telling effect we have used scroll-snap-align: start; so only one scroll is needed to get to the whole next section of the page.

We have used intersection observer on the UN´s goal 12 image. When the image is visible on the page it slowly gets more and more visible.


Sources:
https://sdgs.un.org/goals 
https://www.theworldcounts.com/challenges/consumption/clothing/sweatshop-facts
https://developer.mozilla.org/en-US/
https://www.w3schools.com/ 
