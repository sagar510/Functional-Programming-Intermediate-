basicfoldr.xs=foldr.f.[].xs
f.n.ls=n::ls

basicfoldr1.xs=foldr.(\x ls->x::ls).[].xs
basicfoldr2=foldr.(::).[]

-- Sum of list using foldr
slf.xs=foldr.(+).(0).xs

-- Concating list using foldr
clf=foldr.(++).[]

-- Adding the squares of the sum using foldr
sqsumf=map.(\x->x*x);foldr.(+).(0)
sqsumfsir1.xs=foldr.(+).(0).(map.(\x->x*x).xs)
sqsumfsir2.xs=foldr.((\x->x*x);(+)).(0).xs


-- List Comprehension

sq.n=[x*x | x<-[1...n]]

mysq2.n=[x*x | x<-[2,4...n]]

sq3.n=[x*x | x<-[1...n],mod.x.2==0]

common.l1.l2=[x| x<-l1,y<-l2,x==y]

-- Squaring and adding using list coprehension

sqlc.xs=foldr.(+).0.[x*x|x<-xs]


--Q1

multup.xs=map.(\(a,b)->(a*b)).xs


--Q2
rsw=filter.((map.(\c->c==' '));foldr.(||).False)
     --func2.ks=foldr.(||).False.(map.(\c->c==' ').ks)
     --func2c=(map.(\c->c==' '));foldr.(||).False


           -- one line
           --   rsw1l=filter.((map.(\c->c==' '));foldr.(||).False)

capt.xs=map.(\(x::xs)->chr.((ord.x)-32)::xs).xs

addl.xs=map.(\xs->(xs,(length.xs))).xs

final=rsw;capt;addl

--Q3

sum2last.xs=map.(\(x::y::xs)->y+(last.(y::xs)*last.(y::xs))).xs


--Q4

isorted.[]=[]
isorted.[x]=[]
isorted.(x::y::xs)=[foldr.(&&).True.((x<y)::isorted.(y::xs))]

isorted2.xs=foldr.(&&).True.(makboli.xs)

makboli.[x]=[]
makboli.(x::y::xs)=(x<y)::makboli.(y::xs)
