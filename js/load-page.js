 // Leitura completa do nosso documento HTML
 $(document).ready(function(){

    // Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML
    
    $('a').click(function(e){
        e.preventDefault()
    
        //Criar uma variável local que receba o atributo href do link
    
        let page = $(this).attr('href')
    
        $('.modal-title').empty()//Limpar o titúlo
        $('.modal-body').empty()//Limpar o Corpo do HTML
    
        //Verificar qual conteúdo eu devo carregar
        switch(page){
            //Se for para abrir a página sobre mim...
            case 'SobreMim': 
                $('.modal-title').append('Sobre mim')
                $('.modal-body').append(`<p>
                Meu nome é Alex Pelloso, tenho 15 anos e moro na cidade de Guaimbê-SP.<br>
                Eu curso o 2° ano do Ensino Médio em Desenvolvimento de Sistemas da Etec de Lins
                </p>`)
                $('#modal-info').modal('show')
            break
    
            //Se for para abrir a página Formação...
            case 'Home': 
                $('.modal-title').append('Página Inical')
                $('.modal-body').append(`<p>
                <b>Home: </b> <br><br>
                Você já está na pagina principal!
                </p>`)
                $('#modal-info').modal('show')
            break
    
            //Se for para abrir a página Trabalhos...
            case 'Projetos': 
                $('.modal-title').append('Projetos')
                $('.modal-body').append(`<p> <b>Futuros Projetos</b> <br><br>
                Modelar e criar um site szoinho para restaurante do meu pai
                </p>`)
                $('#modal-info').modal('show')
            break
    
            //Se for para abrir a página Contatos...
            case 'Contato': 
                $('.modal-title').append('Contatos')
                $('.modal-body').append(`<p>
                <b>Telefone:</b> <br><br>
                +55 14 99705-8363<br>
                pellosoalex@gmail.com
                </p>`)
                $('#modal-info').modal('show')
            break

            //Se for para abrir a página Whatsapp...
            case 'whats': 
                $('.modal-title').append('Whatsapp')
                $('.modal-body').append(`<p>
                <b>Whatsapp:</b> <br><br>
                https://api.whatsapp.com/send?phone=5514997058363
                </p>`)
                $('#modal-info').modal('show')
            break

            //Se for para abrir a página instagram...
            case 'insta': 
                $('.modal-title').append('Instagram')
                $('.modal-body').append(`<p>
                <b>Instagram:</b> <br><br>
                https://www.instagram.com/alex_pelloso/?hl=pt-br
                </p>`)
                $('#modal-info').modal('show')
            break

            //Se for para abrir a página Contatos...
            case 'face': 
                $('.modal-title').append('Facebook')
                $('.modal-body').append(`<p>
                <b>Facebook:</b> <br><br>
                https://www.facebook.com/alexrodrigo.alexjunior/
                </p>`)
                $('#modal-info').modal('show')
            break

    
            default: alert('Link não encontrado');
        }
    
        })
    
    })

      