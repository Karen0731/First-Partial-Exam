
function click()
{
    let submit = document.getElementById("submit");
    let name = document.querySelector('.userName');
    let comment = document.querySelector('.userComment');
    let section = document.querySelector('.seccionComments');
    submit.addEventListener('click',(event)=>
    {

            section.innerHTML +=
                `
                    <p>
                        Name
                        <p>
                            Delete
                        </p>
                    </p>
                    <p>
                        comment
                    </p>
                `;
            alert("entra");
    });
}

function erase()
{

}

function init()
{
    click();
    erase();
}

init();