const jsonData = {
    "_id": {
      "$oid": "63b64dc9e3b230ebb60a495e"
    },
    "_key": "topic:2085",
    "category": "Course",
    "cid": {
      "$numberDouble": "NaN"
    },
    "commitment": "4 hours",
    "commitment_type": "custom",
    "deadline": "",
    "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
    "faqs": [],
    "globalTags": [],
    "isActive": true,
    "lastposttime": 0,
    "learning_outcomes": [
      "Bare minimum knowledge of project management",
      "4SA Concept",
      "Would be able to handle any project efficiently"
    ],
    "mainPid": 0,
    "postcount": 0,
    "pre_requisites": [
      "An open mind to learn any concept",
      "Thought of Unlearning and Relearning "
    ],
    "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
    "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
    "slug": "2085/technical-project-management",
    "status": "published",
    "tasks": [
      {
        "task_id": 18882,
        "task_title": "Explore the world of management",
        "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        "status": "notworkyet",
        "assets": [
          {
            "asset_id": 18883,
            "asset_title": "Technical Project Management",
            "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
            "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
            "asset_type": "display_asset",
            "asset_content_type": "video"
          },
          {
            "asset_id": 18884,
            "asset_title": "Threadbuild",
            "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "threadbuilder"
          },
          {
            "asset_id": 18885,
            "asset_title": "Structure you pointers ",
            "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "article"
          },
          {
            "asset_id": 18886,
            "asset_title": "4SA Method",
            "asset_description": "To explore more read more",
            "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            "asset_type": "display_asset",
            "asset_content_type": "article"
          },
          //add or copy asset to check if the assetcontainer creating in main container or not.
        ]
      }
    ],
    "tid": 2085,
    "timestamp": 1672891849700,
    "title": "Technical Project Management",
    "type": "project",
    "uid": 100,
    "viewcount": 0,
    "publishedAt": 1672893847792
  };
  
  // Add event listener to execute the function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    createAssetComponent(jsonData, 'main-content');
    sidebar_content(jsonData)
    sidebar_tasks(jsonData)
  });
  
  //Collapse function
  document.getElementById('sidebar-btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('collapsed');
  });
  document.querySelector('.sidebar .top button').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('collapsed');
  });
  //Asset container that will created 
  function createAssetComponent(data, containerId) {
    const mainContainer = document.getElementById(containerId);
  
    data.tasks.forEach(task => {
      task.assets.forEach(asset => {
        const assetContainer = document.createElement('div');
        assetContainer.className = 'asset-container';
  
        //header part
        const headerDiv = document.createElement('div');
        const heading = document.createElement('h2');
        heading.textContent = asset.asset_title;
        const infoBtn = document.createElement('span');
        infoBtn.className = 'info-btn';
        const infoImg = document.createElement('img');
        infoImg.src = './asset/i.png';
        infoImg.alt = '';
        infoBtn.appendChild(infoImg);
        headerDiv.appendChild(heading);
        headerDiv.appendChild(infoBtn);
        
        //inside the card
        const article = document.createElement('article');
        const paragraph = document.createElement('p');
        const span = document.createElement('span');
        span.textContent = 'Description:';
        paragraph.appendChild(span);
        paragraph.append(' ' + asset.asset_description.replace(/\r?\n|\r/g, ' '));
        article.appendChild(paragraph);
  
        const assetContent = document.createElement('div');
        assetContent.className = 'asset-content';
  
            // I have used innerHTML to reduce hardcode and better understandability for my colleagues.
            //threadbuilder section
        if (asset.asset_content_type === 'threadbuilder') {
          const threadDiv = document.createElement('div');
          threadDiv.className = 'thread';
  
          threadDiv.innerHTML =
          ` <div class="thread-container" id="assetContent">
            <div class="thread">
                <img src="./asset/Vector.png" alt="" class="thread-img">
                <h1 class="thread-text">Thread A</h1>
            </div>
            <div class="add-thread">
                <div class="sub-thread-div">
                    <div class="sub-thread">
                        <h1 class="sub-thread-text">Sub thread 1</h1>
                        <div class="input-thread">
                            <input type="text" class="sub-thread-input" placeholder="Enter Text here">
                        </div>
                    </div>
                    <div class="sub-interception">
                        <h1 class="sub-thread-text">Sub interpretation 1</h1>
                        <div class="input-thread">
                            <input type="text" class="sub-thread-input" placeholder="Enter Text here">
                        </div>
                    </div>
                </div>
                <div class="buttons-section">
                    <img src="./asset/Group 1588.png" alt="">
                    <button class="select-button">Select categ
                        <img src="./asset/Vector-down.png" alt="">
                    </button>
                    <button class="select-button">Select process
                        <img src="./asset/Vector-down.png" alt="">
                    </button>
                </div>
                <button class="add-sub-thread">+ Sub Thread</button>
                <div class="summary-of-thread">
                    <h1 class="sub-thread-text">Summary for thread A</h1>
                    <div class="input-thread">
                        <input type="text" class="sub-thread-input" placeholder="Enter Text here">
                    </div>
                </div>
                </div>

        `;
          assetContent.appendChild(threadDiv); //here i appended the child in asset container
        }
        
        //article section
        else if (asset.asset_content_type === 'article' && asset.asset_type === 'input_asset') {
          
          const articleDiv = document.createElement('div');
          articleDiv.className = 'article';
  
          articleDiv.innerHTML = `
              <div id="assetContent" style="padding: 20px;">
                  <div style="padding: 20px; height: 100%;">
                      <p style="font-size: 16px; font-weight: 600; line-height: 21.79px; padding: 13px 0;">Title</p>
                      <input type="text" class="input">
      
                      <p style="font-size: 16px; color: #000000; font-weight: 600; line-height: 21.79px; padding: 16px 0;">Content</p>
      
                      <div class="content-value">
                          <div class="top">
                              <div class="options">
                                  <button>File</button>
                                  <button>Edit</button>
                                  <button>View</button>
                                  <button>Insert</button>
                                  <button>Format</button>
                                  <button>Tools</button>
                                  <button>Table</button>
                                  <button>Help</button>
                              </div>
      
                              <div class="editing">
                                  <img src="./asset/arrow-curve-left-right.png" alt="">
                                  <img src="./asset/arrow-curve-left-down.png" alt="">
                                  <img src="./asset/arrow-expand-02.png" alt="">
      
                                  <input type="text" class="paragraph" placeholder="Paragraph">
      
                                  <div class="buttons">
                                      <img src="./asset/Ellipse 197.png" alt="">
                                      <img src="./asset/Ellipse 197.png" alt="">
                                      <img src="./asset/Ellipse 197.png" alt="">
                                  </div>
                              </div>
                          </div>
      
                          <div class="bottom"></div>
                      </div>
                  </div>
              </div>
          `;
          
          assetContent.appendChild(articleDiv); //here i appended the child in asset container.


        }
        else if (asset.asset_content_type === 'video') {
          // handle other asset content types (video, article, input_asset) as needed
          const iframe = document.createElement('iframe');
          iframe.src = asset.asset_content.trim();
          iframe.allowFullscreen = true;
          assetContent.appendChild(iframe);
        }
        else {
          const iframe = document.createElement('iframe');
          iframe.src = asset.asset_content.trim();
          iframe.style.width = '100%';
          iframe.style.height = '450px';
          iframe.allowFullscreen = true;
          assetContent.appendChild(iframe);
        }
  
  
        assetContainer.appendChild(headerDiv);
        assetContainer.appendChild(article);
        assetContainer.appendChild(assetContent);
        mainContainer.appendChild(assetContainer);
      });
    });
  }
  const sidebar_content = (data) => {
    const sidebar = document.querySelector('#sidebar .bottom ul');
  
  
    // Clear the existing content (if any)
    sidebar.innerHTML = '';
  
    // Loop through tasks
    data.tasks.forEach(task => {
  
      // Create a list item for the task title
      const taskItem = document.createElement('li');
      taskItem.textContent = task.task_title;
  
      // Create a nested list for the assets
      const assetList = document.createElement('ul');
  
      // Loop through assets
      task.assets.forEach(asset => {
        const assetItem = document.createElement('li');
        assetItem.textContent = asset.asset_title;
        assetList.appendChild(assetItem);
      });
  
      // Append the asset list to the task item
      taskItem.appendChild(assetList);
      // Append the task item to the sidebar
      sidebar.appendChild(taskItem);
    });
  
  }
  let taskCount = 0;
  const sidebar_tasks = (data) => {
    const taskCounter = document.querySelector('#sidebar .bottom ');
  
    // Populate the task list and count the number of tasks
    data.tasks.forEach(task => {
      taskCount++;
      const count = document.createElement('div')
      count.className = 'total'
      count.textContent = `${taskCount}`
  
      taskCounter.appendChild(count)
    })
  }