sq1to10.n=[x*x|x<-[1...n]]

maksym.n=((chr.(n+48))::['-'|x<-[1...n]])++[chr.(10)]

--makallsym.a.b=([chr.12]++maksym.b)

makall.xs=foldr.(maksym;(++)).[].xs

-- Making bar graph in 1 line
makbar=foldr.((\n->(chr.(n+48)::['-'|x<-[1...n]]++[chr.10]));(++)).[]

-- Divisor of a number using List Comprehension
divisor.x=[k|k<-[1...x],mod.x.k==0]

-- Prime numbers upto n
prime.n=[x|x<-[1...n],length.(divisor.x)==2]



-- Continued Spaces

--removespaces
rs.xs=filter.(\c->c/=' ').xs

-- Removing Single Words
rsw.xs=[x|x<-xs,xs1.x>0]
xs1.ys=length.[True|x<-ys,x==' ']

    --(Aliter)
rswa.xs=filter.(xs1a).xs
xs1a.ys=length.(filter.(\c->c==' ').ys)>0
        -- Aliter
      xs1aa.ys=[x==' '|x<-ys]