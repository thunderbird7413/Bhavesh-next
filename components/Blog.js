import React from 'react';
import './Blog.css';

const Blog = () => {
    //     const blogPosts = [
    //         {
    //             id: 1,
    //             title: "Granite vs. Marble: Which One Should You Choose?",
    //             content: `✨ <strong>Durability:</strong> Granite is more durable and resistant to scratches and heat, making it better for kitchens. Marble, while elegant, is softer and more prone to staining — better suited for low-traffic areas like bathroom vanities or decorative applications.<br><br>

    // 🧼 <strong>Maintenance:</strong> Granite requires sealing once a year but is easier to maintain. Marble may require more frequent care.<br><br>

    // 🎨 <strong>Appearance:</strong> Marble offers smooth, flowing veining and a soft, elegant look. Granite features bold patterns and speckled textures that add dramatic character to any room.<br><br>

    // 💰 <strong>Cost:</strong> Generally, granite is more affordable than marble, though prices vary depending on color, origin, and finish.<br><br>

    // 🏆 <strong>Final Tip:</strong> For high-use areas like kitchen countertops, <strong>granite is the clear winner</strong>. For artistic, luxurious touches, <strong>marble shines</strong>. We supply both, offering expert advice on what fits best for your project.`,
    //             image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    //             date: "March 15, 2024"
    //         },
    //         {
    //             id: 2,
    //             title: "How to Maintain Granite Surfaces for Lasting Beauty",
    //             content: `💎 <strong>Low Maintenance:</strong> Quartz is non-porous and doesn't require sealing, making it highly resistant to stains and bacteria.<br><br>

    // 🌈 <strong>Consistency in Design:</strong> Quartz slabs offer uniform color and pattern, perfect for modern aesthetics.<br><br>

    // 🛠️ <strong>Durability:</strong> Scratch and heat-resistant, quartz is ideal for busy kitchens.<br><br>

    // 🎨 <strong>Variety:</strong> Available in a wide range of colors and finishes to match your design vision.<br><br>

    // 🚀 <strong>Conclusion:</strong> Quartz combines beauty with durability, making it a top choice for modern kitchens. Ask us for samples!`
    // ,
    //             image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1964&auto=format&fit=crop",
    //             date: "March 12, 2024"
    //         },
    //         {
    //             id: 3,
    //             title: "Why Granite is the Best Choice for Kitchen Countertops",
    //             content: `🚿 <strong>Function First:</strong> Choose stones that handle humidity well like granite or quartzite. Avoid porous stones like limestone in wet zones.<br><br>

    // 🧼 <strong>Easy to Clean:</strong> Polished finishes resist soap scum and watermarks better than honed or textured surfaces.<br><br>

    // 🧖 <strong>Safety:</strong> For floors, choose textured or honed finishes to reduce slipping hazards.<br><br>

    // 🎨 <strong>Style Match:</strong> Neutral-toned stones enhance spa-like aesthetics. Bold veined marble makes a dramatic statement.<br><br>

    // 🔍 <strong>Summary:</strong> Balance durability, style, and safety. Consult our team for expert guidance on perfecting your bathroom design.`
    // ,
    //             image: "https://images.unsplash.com/photo-1721245321889-5e3dfdf7929b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //             date: "March 10, 2024"
    //         },
    //         {
    //             id: 4,
    //             title: "Which is better, Rajasthan Granite or South Granite?",
    //             content: `✅ <strong>Do:</strong><br>
    // - Use pH-neutral cleaners<br>
    // - Wipe spills immediately<br>
    // - Reseal natural stone annually<br><br>

    // ❌ <strong>Don't:</strong><br>
    // - Use vinegar, lemon, or bleach<br>
    // - Place hot pots directly<br>
    // - Cut directly on the stone<br><br>

    // 🧽 <strong>Pro Tip:</strong> Regular care keeps your stone surfaces looking brand new. We offer sealers and maintenance kits — ask us!`
    // ,
    //             image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    //             date: "March 8, 2024"
    //         },
    //         {
    //             id: 5,
    //             title: "How to Choose the Right Granite for Your Project",
    //             content: `🛠️ <strong>Tailored Fit:</strong> Every piece is cut to exact dimensions, ensuring a seamless look and perfect fit.<br><br>

    // 🎨 <strong>Design Freedom:</strong> Choose your edge style, thickness, and cutouts for sinks or appliances.<br><br>

    // 🚀 <strong>Efficiency:</strong> Faster installation and fewer on-site issues.<br><br>

    // 🏗️ <strong>Added Value:</strong> Custom work elevates the overall design and value of your space.<br><br>

    // 📢 <strong>Why Us?</strong> Our in-house fabrication shop ensures top-quality craftsmanship and quick turnaround times.`
    // ,
    //             image: "https://images.unsplash.com/photo-1649602518046-332ac0ea51f8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //             date: "March 6, 2024"
    //         },
    //         {
    //             id: 6,
    //             title: "Common Myths About Granite – Debunked!",
    //             content: `🛠️ <strong>Tailored Fit:</strong> Every piece is cut to exact dimensions, ensuring a seamless look and perfect fit.<br><br>

    // 🎨 <strong>Design Freedom:</strong> Choose your edge style, thickness, and cutouts for sinks or appliances.<br><br>

    // 🚀 <strong>Efficiency:</strong> Faster installation and fewer on-site issues.<br><br>

    // 🏗️ <strong>Added Value:</strong> Custom work elevates the overall design and value of your space.<br><br>

    // 📢 <strong>Why Us?</strong> Our in-house fabrication shop ensures top-quality craftsmanship and quick turnaround times.`
    // ,
    //             image: "https://images.unsplash.com/photo-1697979778391-4253efde199d?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //             date: "March 4, 2024"
    //         },
    //         {
    //             id: 7,
    //             title: "Why Granite Countertops Never Go Out of Style",
    //             content: `Granite countertops have been a top choice for kitchens and bathrooms for decades—and for good reason. As trends come and go, granite remains a timeless staple. Its durability, natural beauty, and individuality make it a favorite among homeowners and designers alike.

    // Each granite slab is unique, showcasing patterns and colors formed over millions of years. Whether you prefer subtle neutrals or bold veining, there's a granite style to match your aesthetic. It pairs well with modern, rustic, or traditional interiors, making it incredibly versatile.

    // Functionality is another key benefit. Granite is resistant to heat, scratches, and stains when properly sealed. It's a hardworking surface that stands up to daily use, which makes it ideal for busy kitchens. With minimal maintenance—a quick wipe-down and occasional sealing—granite looks stunning for decades.

    // Despite the rise of engineered surfaces like quartz, granite holds its own because it offers something synthetic materials can't: natural character. It's not just a countertop—it's a one-of-a-kind piece of the earth brought into your home.

    // Investing in granite is more than a design choice; it's a decision that adds long-term value and beauty to your space. If you want a material that combines form, function, and forever appeal, granite is a clear winner.`,
    //             image: "https://images.unsplash.com/photo-1662624915046-02d9d4ee724d?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //             date: "March 2, 2024"
    //         },
    //         {
    //             id: 8,
    //             title: "How Granite Is Formed: A Look Inside the Earth",
    //             content: `Granite isn't just beautiful—it's a marvel of natural geology. Formed deep beneath the Earth's surface over millions of years, granite is an igneous rock, created when molten magma slowly cools and solidifies underground.

    // This slow cooling process allows large crystals of minerals like quartz, feldspar, and mica to grow, giving granite its distinctive texture and color variations. Depending on the mineral composition and location, granite can range from white and grey to pink, green, gold, or even black.

    // Granite is then quarried from mountain regions around the world—India, Brazil, Italy, and the U.S. are some of the top producers. Massive blocks are cut out of the earth and sliced into slabs, which are then polished, finished, and ready to become stunning countertops or building materials.

    // Choosing granite means you're bringing a piece of the planet's history into your home—a stone shaped by natural forces over eons. No two slabs are the same, which makes each installation one-of-a-kind.

    // When you run your hand over a granite countertop, you're not just touching a surface—you're connecting with a process that started in the depths of the Earth. That's what makes granite not only a practical choice, but a profoundly beautiful one.`,
    //             image: "https://images.unsplash.com/photo-1709686501892-71880bc81729?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //             date: "February 28, 2024"
    //         },
    //         {
    //             id: 9,
    //             title: "The Pros and Cons of Honed vs. Polished Granite",
    //             content: `Granite comes in a variety of finishes, with honed and polished being the most popular. While both are beautiful, they serve different purposes and suit different design styles.

    // Polished granite is the classic high-gloss finish most people recognize. It reflects light, deepens the color of the stone, and resists moisture well. It's easy to clean and gives a sleek, elegant look—perfect for modern or traditional kitchens and bathrooms.

    // Honed granite has a matte or satin finish, with a soft, natural appearance. It doesn't reflect as much light, which gives it a more subdued, contemporary feel. However, honed surfaces can show fingerprints, water spots, and stains more easily, especially on darker granite, and may require more frequent sealing.

    // So which should you choose? If you want shine, easier upkeep, and a classic look, polished granite is the way to go. If you're after a softer, modern vibe and don't mind a little extra maintenance, honed granite could be a great fit.

    // Either way, you're getting the same durability and long-lasting beauty that granite is known for. The finish just adds that final touch to reflect your personal style.`,
    //             image: "https://images.unsplash.com/photo-1748196477140-f4e115602e86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //             date: "February 25, 2024"
    //         }
    //     ];

    const blogPosts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
            title: "Comparing Types of Granite",
            content: `Granite Comparison Guide: Premium vs. Standard vs. Commercial<br/><br/>
  🪨 Premium Granite:<br/>
  ✨ Highest quality with consistent color and pattern.<br/>
  🔍 Carefully inspected and sourced from top quarries.<br/>
  🛠️ Requires minimal maintenance and has high durability.<br/><br/>
  
  🧱 Standard Granite:<br/>
  👍 Good quality with some variations in pattern and color.<br/>
  🏗️ Suitable for most residential and light commercial uses.<br/>
  💰 Balanced option between quality and cost.<br/><br/>
  
  📉 Commercial Grade Granite:<br/>
  🔄 Lower quality with more natural imperfections.<br/>
  💡 Ideal for large projects with tight budgets.<br/>
  🔧 May require more maintenance over time.<br/><br/>
  
  Choosing the Right Grade:<br/>
  ✅ Consider your budget, usage, and visual expectations.<br/>
  🏠 Premium is great for high-end homes, standard for general use, and commercial for cost-effective large spaces.`,
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1964&auto=format&fit=crop",
            title: "Granite Maintenance Tips",
            content: `Essential Granite Maintenance Tips<br/><br/>
  🧽 Daily Cleaning:<br/>
  💦 Use a pH-neutral cleaner or mild dish soap with warm water.<br/>
  🚫 Avoid acidic or abrasive cleaners to preserve the sealant.<br/><br/>
  
  🛡️ Sealing:<br/>
  🗓️ Reseal granite every 1-2 years to prevent staining.<br/>
  💧 Test seal by dropping water—if it absorbs, reseal.<br/><br/>
  
  📦 Preventing Damage:<br/>
  🥵 Use trivets under hot pans to avoid thermal shock.<br/>
  🔪 Always use a cutting board to prevent scratches.<br/>
  💦 Wipe spills quickly, especially acidic liquids like wine or citrus.<br/><br/>
  
  With these habits, your granite will stay stunning and durable for years!`,
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1721245321889-5e3dfdf7929b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Granite Myths Busted",
            content: `Granite Myths Busted!<br/><br/>
  ❌ Myth: Granite is indestructible<br/>
  🔍 Truth: It's durable but can chip or crack under extreme force.<br/><br/>
  
  ❌ Myth: Granite doesn’t need sealing<br/>
  🧪 Truth: Most granites are porous and benefit from sealing.<br/><br/>
  
  ❌ Myth: Dark granite is harder than light granite<br/>
  🧱 Truth: Hardness depends on the specific mineral composition, not just color.<br/><br/>
  
  ❌ Myth: Granite emits harmful radiation<br/>
  ☢️ Truth: Any emission is extremely low and far below harmful levels.<br/><br/>
  
  Know the facts to make informed decisions!`,
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
            title: "Granite in Your Project",
            content: `Where Granite Shines: Best Use Cases<br/><br/>
  🍳 Kitchen Countertops:<br/>
  🔥 Heat resistant and durable for heavy use.<br/><br/>
  
  🛁 Bathroom Vanities:<br/>
  💧 Moisture-resistant and adds luxury.<br/><br/>
  
  🧱 Flooring and Wall Cladding:<br/>
  🏛️ Offers a premium look in high-traffic areas.<br/><br/>
  
  🏡 Outdoor Applications:<br/>
  ☀️ UV resistant and weather durable for BBQ areas and patios.<br/><br/>
  
  Choose the right finish (polished, honed, leathered) based on usage and style.`,
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1649602518046-332ac0ea51f8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Why Choose Granite?",
            content: `Why Choose Granite? Top Reasons to Go Granite!<br/><br/>
    🪨 Natural Beauty:<br/>
    🎨 Each slab is unique with patterns and colors formed over millions of years.<br/><br/>
    
    🛠️ Durability:<br/>
    🧱 Withstands heat, scratches, and general wear and tear.<br/><br/>
    
    🧼 Low Maintenance:<br/>
    🧽 Easy to clean and only needs periodic sealing.<br/><br/>
    
    🏡 Value Addition:<br/>
    💰 Enhances the resale value of your property.<br/><br/>
    
    🌍 Eco-Friendly:<br/>
    ♻️ A natural material with a long lifecycle, reducing replacement waste.<br/><br/>
    
    Granite is a long-term investment in elegance and resilience.`,
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1697979778391-4253efde199d?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Granite vs Other Stones",
            content: `Granite vs. Marble vs. Quartz: A Quick Comparison<br/><br/>
    🪨 Granite:<br/>
    🛠️ Natural, durable, and unique patterns.<br/>
    💰 Cost-effective in the long run.<br/><br/>
    
    🪞 Marble:<br/>
    🎨 Softer, more porous, elegant veining.<br/>
    ⚠️ Requires more maintenance.<br/><br/>
    
    🔬 Quartz:<br/>
    🏭 Engineered stone, uniform look.<br/>
    💧 Non-porous and low maintenance.<br/><br/>
    
    Choose based on aesthetics, usage, and maintenance comfort.`,
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1662624915046-02d9d4ee724d?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Understanding Granite Finishes",
            content: `Granite Finishes Explained<br/><br/>
    ✨ Polished Finish:<br/>
    🌟 Glossy and reflective, enhances color and pattern.<br/>
    🧽 Easy to clean, ideal for countertops.<br/><br/>
    
    🌫️ Honed Finish:<br/>
    🪵 Matte look, smooth feel, soft appearance.<br/>
    👍 Great for flooring and low-glare surfaces.<br/><br/>
    
    🐍 Leathered Finish:<br/>
    🖐️ Textured surface, hides smudges and fingerprints.<br/>
    💼 Suitable for contemporary kitchen styles.<br/><br/>
    
    Each finish offers a different vibe – choose what suits your space best!`,
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1709686501892-71880bc81729?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Buying Granite: What to Check",
            content: `Buying Granite? Here's Your Checklist!<br/><br/>
    🕵️‍♂️ Inspect the Slab:<br/>
    🔍 Check for cracks, color consistency, and defects.<br/><br/>
    
    📐 Measure Precisely:<br/>
    📏 Accurate dimensions avoid installation issues.<br/><br/>
    
    📜 Check Certification:<br/>
    ✅ Ensure it meets quality and origin standards.<br/><br/>
    
    💬 Ask About Warranty:<br/>
    🛡️ Know what’s covered and what’s not.<br/><br/>
    
    🚚 Delivery & Installation:<br/>
    🔧 Choose experienced installers for the best results.<br/><br/>
    
    Being informed helps you get the best value and beauty for your investment.`,
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1748196477140-f4e115602e86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Granite Edge Profiles",
            content: `Exploring Granite Edge Profiles<br/><br/>
    ⬛ Straight Edge:<br/>
    🧼 Clean and modern look, simple to maintain.<br/><br/>
    
    ◻️ Beveled Edge:<br/>
    🔳 Angled cut for a classic touch.<br/><br/>
    
    ⚪ Bullnose Edge:<br/>
    ⭕ Fully rounded for safety and softness.<br/><br/>
    
    🎯 Ogee Edge:<br/>
    🏰 Elegant curves, often used in luxurious interiors.<br/><br/>
    
    🧩 Custom Edges:<br/>
    🛠️ Mix profiles for a personalized touch.<br/><br/>
    
    The edge profile adds character – pick one that complements your design!`,
        },
    ];

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <div className="hero-overlay"></div>
                <h1>Granite Insights & Trends</h1>
                <p>Discover the latest in granite design, technology, and industry insights</p>
            </div>

            <div className="blog-container">
                {blogPosts.map((post) => (
                    <article key={post.id} className="blog-post">
                        <div className="blog-post-image">
                            <img src={post.image} alt={post.title} />
                        </div>
                        <div className="blog-post-content">
                            <div className="blog-post-header">
                                <h2>{post.title}</h2>
                                <span className="blog-date">{post.date}</span>
                            </div>
                            <div className="blog-post-text">
                                {post.content.split('\n').map((paragraph, index) => (
                                    // <p style={{ textAlign: "left" }} key={index}>{paragraph.trim()}</p>
                                    <div
                                        className="blog-text"
                                        style={{ textAlign: "left" }}
                                        dangerouslySetInnerHTML={{ __html: paragraph.trim() }}
                                    />
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog; 